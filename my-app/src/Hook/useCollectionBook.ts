import { useEffect, useState } from "react";

interface CollectionBook {
  collection_id: number;
  collection_name: string;
  book_image_url: string;
}

const useCollectionBook = () => {
  const [collectionBook, setCollectionBook] = useState<CollectionBook[]>([]);

  useEffect(() => {
    const fetchCollectionBook = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/collectionBook",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setCollectionBook(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollectionBook();
  }, []);
  return collectionBook;
};

export default useCollectionBook;
