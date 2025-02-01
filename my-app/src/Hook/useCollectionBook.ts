import { useEffect, useState } from "react";
import { ColecaoLivro } from "../types/colecaoLivro";

const useCollectionBook = () => {
  const [collectionBook, setCollectionBook] = useState<ColecaoLivro[]>([]);

  useEffect(() => {
    const fetchCollectionBook = async () => {
      try {
        const response = await fetch(
          "https://biblioteca-da-mamae.onrender.com/api/collectionBook",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data)

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
