import { useState, useEffect } from "react";

interface Collection {
  image_url: string | undefined;
  id: number;
  name: string;
}

const useCollections = () => {
    const [collections, setCollections] = useState<Collection[]>([]);

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
