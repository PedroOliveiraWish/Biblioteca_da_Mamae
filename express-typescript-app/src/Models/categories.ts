import { RowDataPacket } from 'mysql2/promise';
import { connection } from "../database";

interface Categories {
    id: number;
    name: string;
}

const getCategories = async (): Promise<Categories[]> => {
    try {
        // I must import the RowDataPacket class for inform that the result is a RowDataPacket
        const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM categories');

        return rows as Categories[]; // Cast rows to Categories[]
    } catch (error) {
        console.error(error);
        return []; // Fallback to an empty array in case of error
    }
};

export { getCategories };