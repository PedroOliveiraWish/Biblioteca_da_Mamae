import React, { useState } from "react";

import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import BookModal from "../../Component/HomePage/BookModal";
import BookForm from "../../Component/HomePage/SearchForm";
import AboutSection from "../../Component/HomePage/AboutPage";

// Hooks personalizados
import useCategories from "../../Hook/useCategories";

import { Container} from "react-bootstrap";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isModal, setIsModal] = useState(false);

  const categories = useCategories();

  function saveBook(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsModal(false);
    alert(`Livro adicionado à categoria: ${selectedCategory}`);
  }

  function closeModal(): void {
    setIsModal(false);
  }

  return (
    <div style={{ minHeight: "100vh" }}>
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
          <h1>Bem-vindo à Sua Biblioteca Pessoal</h1>
          <p>Organização fácil para todo amante de livros</p>
        </div>
      </div>

      <AboutSection
        title="Bem-vindo ao Meu Site de Gerenciamento de Biblioteca!"
        description="Este projeto é um sistema de gerenciamento de biblioteca pessoal criado com amor para minha mãe. Ele foi projetado para ajudar a organizar e categorizar sua coleção de livros com facilidade e estilo."
      />

      <Container className="py-4">
        <div className="mb-4">
          <BookForm />
        </div>

        {isModal && (
          <BookModal
            categories={categories}
            selectedCategory={selectedCategory}
            onCloseModal={closeModal}
            setSelectedCategory={setSelectedCategory}
            onSubmit={saveBook}
          />
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default HomePage;
