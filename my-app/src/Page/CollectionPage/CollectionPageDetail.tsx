import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../../Component/BookPage/BookCard";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../API/Book.api";
import { fetchCollections } from "../../API/Collection.api";

import { Livro } from "../../types/livro";
import { ColecaoLivro } from "../../types/colecaoLivro";

import React, { useState, useEffect } from "react";

const CollectionPageDetail = () => {
  const [books, setBooks] = useState<Livro[]>([]);
  const [filteredCollection, setFilteredCollection] =
    useState<ColecaoLivro[]>();

  const { id } = useParams<{ id: string | undefined }>();
  const id_number = parseInt(id || "0");

  useEffect(() => {
    fetchCollections().then((data) => {
      const collection_data = data as ColecaoLivro[];

      const filtered_data = collection_data.filter(
        (collection: ColecaoLivro) => collection.colecao_id === id_number
      );

      setFilteredCollection(filtered_data);
    });

  }, [id_number])

  useEffect(() => {
    const collection_nome =
      filteredCollection?.map((data: ColecaoLivro) => {
        return data.nome;
      }) || [];


    fetchBooks().then((data) => {
      const books_data = data as Livro[];

      const filtered_books = books_data.filter(
        (livro: Livro) => livro.colecao_nome === collection_nome[0]
      );
      setBooks(filtered_books);
    });

  }, [filteredCollection]);

  return (
    <div className="collection_page_by_id h-100 d-flex flex-column align-items-center justify-content-between">
      <Header />
      <Container>
        <Row className="my-5">
          <Col>
            <Link
              to={"/collection"}
              style={{
                backgroundColor: "#6C3483",
                borderColor: "#6C3483",
                color: "#FFFFFF",
                fontWeight: "bold",
                padding: "1rem",
                textDecoration: "none",
                textTransform: "uppercase",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(108, 52, 131, 0.2)",
              }}
            >
              Coleção
            </Link>
          </Col>
        </Row>
        <Row className=" p-2">
          {books.map((book) => (
            <Col xs={12} lg={6} key={book.id_livro} className="mb-4">
              <BookCard
                id_livro={book.id_livro}
                titulo={book.titulo}
                autor={book.autor}
                imagem_url={book.imagem_url}
                trecho_livro={book.trecho_livro}
                comentario_livro={book.comentario_livro}
                classificacao_livro={book.classificacao_livro}
                categoria_nome={book.categoria_nome}
                colecao_nome={book.colecao_nome}
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
