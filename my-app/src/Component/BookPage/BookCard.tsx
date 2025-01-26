import React from "react";
import { Card } from "react-bootstrap";
import '../../styles/book/book.css'

interface BookCardProps {
  title: string;
  author_name: string;
  image_url: string;
  category_name: string;
}

const BookCard: React.FC<BookCardProps> = (book) => (
  <Card
    className="book-card"
    onMouseEnter={(e) => {
      e.currentTarget.classList.add('hover');
    }}
    onMouseLeave={(e) => {
      e.currentTarget.classList.remove('hover');
    }}
  >
    <div className="content">
      {/* Image Section */}
      <div className="img-container">
        <Card.Img
          src={book.image_url}
          className="card-img"
        />
      </div>

      {/* Text Section */}
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          {book.title}
        </Card.Title>
        <Card.Text className="card-text">
          <div className="author-block">
            {book.author_name}
          </div>
          <div className="category-block">
            {book.category_name}
          </div>
        </Card.Text>
      </Card.Body>
    </div>
  </Card>
);

export default BookCard;
