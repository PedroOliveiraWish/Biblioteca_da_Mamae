import { pool } from "../database";

interface Categories {
    id: number;
    name: string;
}

const getCategories = async (): Promise<Categories[]> => {
    try {
        const result = await pool.query('SELECT * FROM categorias');
        return result.rows as Categories[]; // Retorna as linhas como Categories[]
    } catch (error) {
        console.error(error);
        return []; // Retorna um array vazio em caso de erro
    }
};

export { getCategories };