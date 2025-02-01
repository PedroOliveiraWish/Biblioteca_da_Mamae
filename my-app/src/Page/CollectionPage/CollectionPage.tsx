import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import useCollectionBook from "../../Hook/useCollectionBook";

import { Container, Card, Row, Col } from "react-bootstrap";
import "../../styles/collection/collection.css";

const CollectionPage: React.FC = () => {
  const collections = useCollectionBook();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`collection/${id}`);
  };

  return (
    <div className="collectionPage">
      <Header />

      <div className="hero-section">
        <div className="hero-content">
          <h1>Bem-vindo às suas coleções!</h1>
          <p>Organização fácil para todo amante de livros</p>
        </div>
      </div>

      <Container>
        <Row className="py-5" xs={1} sm={2} md={3} lg={4}>
          {collections.map((collection) => {
            return (
              <Col key={collection.colecao_id}>
                <Card
                  className="collection-card mt-3 shadow-lg rounded"
                  onClick={() => handleClick(collection.colecao_id)}
                >
                  <div className="image">
                    <img
                      className="card-img"
                      src={collection.imagem_url}
                      alt={collection.nome}
                    />
                  </div>
                  <div className="content-title">
                    <div className="card-title">{collection.nome}</div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CollectionPage;
