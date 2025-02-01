import { useState, useEffect } from "react";
import { Livro } from "../types/livro";

const useBook = () => {
  const [books, setBooks] = useState<Livro[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://biblioteca-da-mamae.onrender.com/api/book", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);
  return books;
};

export default useBook;
