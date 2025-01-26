import { useState, useEffect } from "react";

interface Books {
  id: number;
  title: string;
  author: string;
  image_url: string;
  read_book: boolean;
  category_name: string;
}

const useBook = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/book", {
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
