import { RowDataPacket } from "mysql2/promise";
import { connection } from "../database";

interface Collection {
    id: number;
    name: string;
}

const getCollections = async (): Promise<Collection[]> => {
    try {
        const [rows] = await connection.execute<RowDataPacket[]>("SELECT * FROM collections");

        return rows as Collection[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getCollections };