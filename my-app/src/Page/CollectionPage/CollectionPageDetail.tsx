import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { useCollectionBookById } from "../../Hook/useCollectionBookById";
import BookCard from "../../Component/BookPage/BookCard";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const CollectionPageDetail = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const books = useCollectionBookById(id);

  console.log(books)

  return (
    <div className="collection_page_by_id h-100 d-flex flex-column align-items-center justify-content-between">
      <Header />
      <Container>
        <Row className=" p-2">
          {books.map((book) => (
            <Col xs={12} lg={6} key={book.id} className="mb-4">
              <BookCard
                title={book.title}
                author_name={book.author}
                image_url={book.image_url}
                category_name={book.category_name}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CollectionPageDetail;
