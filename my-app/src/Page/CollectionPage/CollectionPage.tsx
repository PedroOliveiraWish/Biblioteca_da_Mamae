import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import useCollectionBook from "../../Hook/useCollectionBook";

import { Container, Card, Row, Col } from "react-bootstrap";

const CollectionPage: React.FC = () => {
  const collections = useCollectionBook();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`collection/${id}`);
  };

  return (
    <div className="collectionPage">
      <Header />

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521920592574-49e0b121c964?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1>Bem-vindo às suas coleções!</h1>
          <p>Organização fácil para todo amante de livros</p>
        </div>
      </div>

      <Container>
        <Row className=" py-5" xs={1} sm={2} md={3} lg={4}>
          {collections.map((collection) => {
            return (
              <Col>
                <Card
                  className=" mt-3 shadow-lg rounded"
                  key={collection.collection_id}
                  style={{
                    height: "400px",
                    cursor: "pointer",
                    border: "1px solid #A569BD",
                  }}
                  onClick={() => handleClick(collection.collection_id)}
                >
                  <div className="image p-2 rounded">
                    <Card.Img
                      className="w-100 shadow-sm rounded"
                      style={{ height: "300px", width: "100%" }}
                      variant="top"
                      src={collection.book_image_url}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ textTransform: "uppercase" }}>
                      {collection.collection_name}
                    </Card.Title>
                  </Card.Body>
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
