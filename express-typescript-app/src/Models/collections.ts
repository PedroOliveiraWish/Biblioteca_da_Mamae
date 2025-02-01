import { pool } from "../database";

interface Collection {
    id_colecao: number;
    nome: string;
}

const getCollections = async (): Promise<Collection[]> => {
    try {
        const result = await pool.query("SELECT * FROM colecoes");
        return result.rows as Collection[]; // Retorna as linhas como Collection[]
    } catch (error) {
        console.error(error);
        return []; // Retorna um array vazio em caso de erro
    }
}

export { getCollections };