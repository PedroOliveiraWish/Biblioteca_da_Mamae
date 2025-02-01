import { useState, useEffect } from "react";
import { ColecaoLivro } from "../types/colecaoLivro";

const useCollections = () => {
    const [collections, setCollections] = useState<ColecaoLivro[]>([]);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/collection')
                const data = await response.json()

                setCollections(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCollections()
    })
    return collections
}

export default useCollections;
