import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { fetchCollections } from "../../API/Collection.api";
import { ColecaoLivro } from "../../types/colecaoLivro";

import "../../styles/collection/collection.css";

const CollectionPage: React.FC = () => {
  const [collections, setCollections] = useState<ColecaoLivro[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCollections().then((data) => {
      const data_collection = data as ColecaoLivro[];

      setCollections(data_collection);
    });
  });

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

        <ul className="list-collection">
          {collections.map((collection) => {
            return (
              <div
                className="collection-card"
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
              </div>
            );
          })}
        </ul>
      <Footer />
    </div>
  );
};

export default CollectionPage;
