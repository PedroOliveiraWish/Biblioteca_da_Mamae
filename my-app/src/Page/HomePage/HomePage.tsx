import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { Livro } from "../../types/livro";
import { ColecaoLivro } from "../../types/colecaoLivro";
import { fetchBooks } from "../../API/Book.api";
import { fetchCollections } from "../../API/Collection.api";
import SliderLivro from "../../Component/Carousel/CarouselLivro";
import { Container } from "react-bootstrap";
import ReadingQuote from "../../Component/Separate/Separate";
import ReadingQuoteTwo from "../../Component/Separate/reading";
import "../../styles/introducao/introducao.css";
import SliderColecao from "../../Component/Carousel/CarouselColecao";
import BookCard from "../../Component/BookPage/BookCard";
import "../../styles/homePage/homePage.css";

import React, {useState, useEffect} from "react";

const Introducao = () => {
  return (
    <div className="introducao">
      <h1 className="titulo">Bem-vinda à Biblioteca da Mamãe!</h1>
      <p className="descricao">
        Entre estas páginas, guardam-se histórias, sonhos e memórias. Cada livro
        aqui não é apenas um amontoado de palavras, mas um pedaço da sua
        jornada, dos seus instantes mais preciosos.
        <br />
        <br />
        Esta biblioteca não é apenas um espaço virtual, mas um reflexo do
        carinho e admiração que sinto por você. Um lugar onde os seus livros
        ganham luz, e onde o violeta envolve cada página como um abraço suave.
        <br />
        <br />
        Que aqui você sempre encontre aconchego, que cada título seja um
        reencontro com as emoções mais bonitas, e que esta biblioteca seja, para
        sempre, um pedacinho do seu coração.
      </p>
    </div>
  );
};

function HomePage() {
  const [books, setBooks] = useState<Livro[]>([])
  const [colecoes, setColecoes] = useState<ColecaoLivro[]>([])

  useEffect(() => {
    fetchBooks().then((data) => {
      const books_data = data as Livro[];

      setBooks(books_data)
    })

    fetchCollections().then((data) => {
      const collections_data = data as ColecaoLivro[]

      setColecoes(collections_data)
    })
  }, [])

  const filhoDoAmanha = books.filter(
    (livro: Livro) => livro.titulo === "Filho do amanha"
  );
  const sempreFoiVoce = books.filter(
    (livro) => livro.titulo === "Sempre foi voce"
  );
  const oMorroDosVentosUivantes = books.filter(
    (livro) => livro.titulo === "O morro dos ventos uivantes"
  );

  const livrosRecomendados = [
    filhoDoAmanha[0] || null,
    sempreFoiVoce[0] || null,
    oMorroDosVentosUivantes[0] || null,
  ].filter(Boolean); // Remove undefined values

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
      ></div>

      <Introducao />

      <Container>
        <SliderLivro livros={books} />
      </Container>
      <ReadingQuote />

      <Container>
        <SliderColecao colecoes={colecoes} />
      </Container>

      <ReadingQuoteTwo />

      <Container>
        <div className="container_livro">
          <div className="titule">Recomendados</div>
          {livrosRecomendados.map((livro) =>
            livro ? (
              <div className="livro">
                <BookCard
                  key={livro.id_livro}
                  titulo={livro.titulo}
                  autor={livro.autor}
                  imagem_url={livro.imagem_url}
                  classificacao_livro={livro.classificacao_livro}
                  categoria_nome={livro.categoria_nome}
                  trecho_livro={livro.trecho_livro}
                  comentario_livro={livro.comentario_livro}
                  id_livro={livro.id_livro}
                  colecao_nome={livro.colecao_nome}
                />
              </div>
            ) : null
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
