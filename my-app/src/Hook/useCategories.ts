import { useState, useEffect } from "react";
import { Categoria } from "../types/categoria";

const useCategories = () => {
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/category");

        const data = await response.json();

        setCategories(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories()
  }, []);

  return categories;
};

export default useCategories;
