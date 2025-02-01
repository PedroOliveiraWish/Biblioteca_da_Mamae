import { useState, useEffect } from "react";
import { Livro } from "../types/livro";

const useCollectionBookById = (collection_id: number | undefined) => {
  const [books, setBooks] = useState<Livro[]>([]);

  useEffect(() => {
    const fetchBooksByCollection = async () => {
      try {
        const response = await fetch(
          `https://biblioteca-da-mamae.onrender.com/api/collection/${collection_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooksByCollection();
  }, []);
  return books;
};

export { useCollectionBookById };