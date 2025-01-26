import { useEffect, useState } from "react";

interface Wishes {
    id: number;
    title: string;
    author: string;
    image_url: string;
    read_book: boolean;
    category_name: string;
}

const useWish = () => {
    const [wishes, setWishes] = useState<Wishes[]>([]);

    useEffect(() => {
        const fetchWishes = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/wish', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const data = await response.json()

                setWishes(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchWishes()
    })

    return wishes;
}

export default useWish;