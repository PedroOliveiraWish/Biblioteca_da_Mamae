import React from "react";
import useWish from "../../Hook/useWishes";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const WishPage = () => {
  const wishes = useWish();

  const handleUpdate = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/wish/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wish-page d-flex justify-content-between flex-column min-vh-100">
      <Header />
      <Container className="my-4">
        <Row className="g-4">
          {wishes.map((wish) => (
            <Col key={wish.id} xs={12} md={6} lg={4}>
              <Card
                className="shadow-lg rounded-lg"
                style={{
                  background: "linear-gradient(145deg, #FDFEFE, #F4F6F7)",
                  border: "none",
                  boxShadow: "0 4px 8px rgba(108, 52, 131, 0.15)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 15px rgba(108, 52, 131, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(108, 52, 131, 0.15)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={wish.image_url}
                  style={{
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#6C3483",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                      textAlign: "center",
                    }}
                  >
                    {wish.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    <div
                      style={{
                        background: "#A569BD",
                        color: "#FFFFFF",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        marginBottom: "0.5rem",
                        fontWeight: "500",
                        textTransform: "capitalize",
                      }}
                    >
                      {wish.author}
                    </div>
                    <div
                      style={{
                        background: "#6C3483",
                        color: "#FFFFFF",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        fontWeight: "500",
                        textTransform: "capitalize",
                      }}
                    >
                      {wish.category_name}
                    </div>
                  </Card.Text>
                  <Button
                    onClick={() => handleUpdate(wish.id)}
                    className="w-100 mt-3"
                    style={{
                      backgroundColor: "#6C3483",
                      borderColor: "#6C3483",
                      fontWeight: "500",
                      transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#A569BD")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6C3483")
                    }
                  >
                    Marcar como comprado
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default WishPage;
