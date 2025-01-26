import { useState, useEffect } from "react";

interface Books {
  id: number;
  title: string;
  author: string;
  image_url: string;
  read_book: boolean;
  category_name: string;
}

const useCollectionBookById = (collection_id: string | undefined) => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchBooksByCollection = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/collection/${collection_id}`,
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