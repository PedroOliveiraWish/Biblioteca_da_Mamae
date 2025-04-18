import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Offcanvas, Card } from "react-bootstrap";

import { fetchBooks } from "../../API/Book.api";
import { fetchCategory } from "../../API/Category.api";
import { Livro } from "../../types/livro";
import { Categoria } from "../../types/categoria";

import BookCard from "../../Component/BookPage/BookCard";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

import "./d.css";

const BookPage: React.FC = () => {
  const [books, setBooks] = useState<Livro[]>([]);
  const [categories, setCategories] = useState<Categoria[]>([])
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    console.log("Selected category:", value); // Debugging line

    setSelectedCategory(value === selectedCategory ? null : value);
  };

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    fetchCategory().then((data) => {
      const categoriesData = data as Categoria[];

      console.log("categories", categoriesData)

      setCategories(categoriesData)
    })
  }, [])

  useEffect(() => {
    fetchBooks().then((data) => {
      const booksData = data as Livro[]; // Explicitly type 'data' as 'Livro[]'
      if (selectedCategory) {
        const filteredBooks: Livro[] = booksData.filter(
          (book: Livro) => book.categoria_nome === selectedCategory
        );

        setBooks(filteredBooks);
      } else {
        setBooks(booksData);
      }
    });
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
                <Card
                  key={category.id_categoria}
                  className="mb-3 shadow-sm border-0"
                >
                  <Card.Body className="p-2">
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value={category.nome}
                        checked={selectedCategory === category.nome}
                        onChange={handleCategoryChange}
                      />{" "}
                      {category.nome}
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
                  key={category.id_categoria}
                  className="mb-2 form-check-label"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    value={category.nome}
                    checked={selectedCategory === category.nome}
                    onChange={handleCategoryChange}
                  />{" "}
                  {category.nome}
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
              <ul className="list-books">
                {books.map((book) => (
                  <BookCard
                    id_livro={book.id_livro}
                    titulo={book.titulo}
                    autor={book.autor}
                    imagem_url={book.imagem_url}
                    classificacao_livro={book.classificacao_livro}
                    categoria_nome={book.categoria_nome}
                    colecao_nome={book.colecao_nome}
                    trecho_livro={book.trecho_livro}
                    comentario_livro={book.comentario_livro}
                  />
                ))}
              </ul>
            </div>
          </Col>
        </>
      </Container>

      <Footer />
    </div>
  );
};

export default BookPage;
