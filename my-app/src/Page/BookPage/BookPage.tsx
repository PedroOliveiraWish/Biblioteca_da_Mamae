import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Offcanvas, Card } from "react-bootstrap";

import useCategories from "../../Hook/useCategories";

import BookCard from "../../Component/BookPage/BookCard";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

import "./d.css";

interface Books {
  id: number;
  title: string;
  author: string;
  image_url: string;
  read_book: boolean;
  category_name: string;
}

const BookPage: React.FC = () => {
  const categories = useCategories();
  const [books, setBooks] = useState<Books[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedCategory(value === selectedCategory ? null : value);
  };

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:3000/api/book", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          options: selectedCategory || "",
        },
      });
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, [selectedCategory]);

  return (
    <div
      className="book-page d-flex flex-column min-vh-100"
      style={{ background: "#FDFEFE" }}
    >
      <Header />

      <Container className="flex-grow-1" fluid>
        <>
          {/* Sidebar Toggle Button */}
          <div className="d-flex justify-content-center align-items-center d-md-none mt-3">
            <Button
              onClick={handleToggleSidebar}
              className="w-50"
              style={{
                backgroundColor: "#6C3483",
                borderColor: "#6C3483",
                color: "#FFFFFF",
                fontWeight: "bold",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(108, 52, 131, 0.2)",
              }}
            >
              {showSidebar ? "Hide Categories" : "Show Categories"}
            </Button>
          </div>

          {/* Offcanvas Sidebar */}
          <Offcanvas
            show={showSidebar}
            onHide={handleToggleSidebar}
            placement="start"
            className="d-md-none"
            style={{
              backgroundColor: "#EBDEF0",
              borderRight: "2px solid #A569BD",
            }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ color: "#6C3483" }}>
                Categorias
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {categories.map((category) => (
                <Card key={category.id} className="mb-3 shadow-sm border-0">
                  <Card.Body className="p-2">
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value={category.name}
                        checked={selectedCategory === category.name}
                        onChange={handleCategoryChange}
                      />{" "}
                      {category.name}
                    </label>
                  </Card.Body>
                </Card>
              ))}
              <Button
                variant="outline-secondary"
                onClick={() => setSelectedCategory(null)}
                className="mt-3"
              >
                Limpar seleção
              </Button>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Fixed Sidebar */}
          <Col xs={12} className="d-none d-md-block custom-checkbox my-3">
            <div className="ul-checkbox">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className=" mb-2 form-check-label"
                >
                  <input
                    className=" form-check-input"
                    type="radio"
                    name="category"
                    value={category.name}
                    checked={selectedCategory === category.name}
                    onChange={handleCategoryChange}
                  />{" "}
                  {category.name}
                </label>
              ))}
            </div>
            <Button
              variant="outline-secondary"
              onClick={() => setSelectedCategory(null)}
              className="mt-3"
            >
              Limpar seleção
            </Button>
          </Col>

          {/* Book Cards */}
          <Col xs={12}>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                padding: "1rem",
                boxShadow: "0 4px 8px rgba(108, 52, 131, 0.1)",
              }}
            >
              <Row>
                {books.map((book) => (
                  <Col xs={12} lg={4} md={6} key={book.id} className="mb-4">
                    <BookCard
                      title={book.title}
                      author_name={book.author}
                      image_url={book.image_url}
                      category_name={book.category_name}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </>
      </Container>

      <Footer />
    </div>
  );
};

export default BookPage;
