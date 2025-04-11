import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/book/book.css";
import { Livro } from "../../types/livro";
import StarRating from "../StarRating/StarRating";

const BookCard: React.FC<Livro> = ({
  titulo,
  autor,
  imagem_url,
  classificacao_livro,
  categoria_nome,
  colecao_nome,
  trecho_livro,
  comentario_livro,
}) => (
  <Card
    className="book-card"
    onMouseEnter={(e) => {
      e.currentTarget.classList.add("hover");
    }}
    onMouseLeave={(e) => {
      e.currentTarget.classList.remove("hover");
    }}
  >
    <div className="content">
      {/* Image Section */}
      <div className="img-container">
        <Card.Img src={imagem_url} className="card-img" />
      </div>

      {/* Text Section */}
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          <div className="title">{titulo}</div>

          <div className="small-text">
            <div className="star">
              <StarRating rating={classificacao_livro} />
            </div>
            <div className="autor">{autor}</div>
          </div>
        </Card.Title>
        <Card.Text className="card-text">
          <span className="category-block">Categoria: {categoria_nome}</span>
          <div className="trecho">
            <p>{trecho_livro}</p>
          </div>
          <div className="comentario">
            <p>{comentario_livro}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </div>
  </Card>
);

export default BookCard;
