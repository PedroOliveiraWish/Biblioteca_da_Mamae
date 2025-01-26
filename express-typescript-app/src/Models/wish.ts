import { connection } from "../database";
import { RowDataPacket } from "mysql2";

interface Books {
    title: string;
    author: string;
    image_url: string;
    is_read: boolean;
    category: number;
    collection: number;
}


const getWishes = async (): Promise<Books[]> => {
    try {
        const [rows] = await connection.execute<RowDataPacket[]>(`
            SELECT 
                books.id, 
                books.title, 
                books.author, 
                books.image_url, 
                books.read_book,
                categories.name AS category_name
            FROM books
            LEFT JOIN categories ON books.category_id = categories.id
            WHERE books.read_book = 0;
        `)

        return rows as Books[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const updateWish = async (id: number): Promise<Books[]> => {
    try {
        const [rows] = await connection.execute<RowDataPacket[]>(`
            UPDATE books SET read_book = 1 WHERE id = ?;
        `, [id])

        return rows as Books[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export {getWishes, updateWish};