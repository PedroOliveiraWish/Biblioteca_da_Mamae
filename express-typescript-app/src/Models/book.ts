import { pool } from "../database";

interface Livro {
    livro_id: number;
    titulo: string;
    autor: string;
    imagem_url: string;
    trecho_livro: string;
    comentario_livro: string;
    classificacao_livro: number;
    categoria_id: number;
    colecao_id: number;
}

const getBooks = async (): Promise<Livro[]> => {
    try {
        const result = await pool.query(`
            SELECT 
            livros.id_livro,
                livros.titulo, 
                livros.autor, 
                livros.imagem_url, 
                livros.trecho_livro, 
                livros.comentario_livro, 
                livros.classificacao_livro,
                categorias.nome as categoria_nome
            FROM livros
            JOIN
            categorias ON livros.categoria_id = categorias.id_categoria
            ORDER BY livros.id_livro
        `);

        return result.rows as Livro[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getBooksByCategoryName = async (categoryName: string): Promise<Livro[]> => {
    try {
        const result = await pool.query(`
            SELECT 
                b.titulo,
                b.autor,
                b.imagem_url,
                b.trecho_livro,
                b.comentario_livro,
                b.classificacao_livro,
                b.categoria_id,
                c.nome as categoria_nome,
                b.colecao_id
            FROM 
                livros b
            JOIN 
                categorias c ON b.categoria_id = c.id_categoria
            WHERE 
                c.nome = $1;
        `, [categoryName]);

        return result.rows as Livro[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getGroupBookByCollection = async (): Promise<Livro[]> => {
    try {
        const result = await pool.query(`
            SELECT 
                colecoes.id_colecao AS colecao_id,
                colecoes.nome AS nome,
                MIN(livros.imagem_url) AS imagem_url
            FROM 
                colecoes
            LEFT JOIN 
                livros ON livros.colecao_id = colecoes.id_colecao
            GROUP BY 
                colecoes.id_colecao, colecoes.nome
            ORDER BY 
                colecoes.id_colecao;
        `);
        return result.rows;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getBooksByCollectionId = async (id: number): Promise<Livro[]> => {
    try {
        const result = await pool.query(`
            SELECT 
                b.titulo, 
                b.autor, 
                b.imagem_url, 
                b.trecho_livro, 
                b.comentario_livro, 
                b.classificacao_livro,
                b.categoria_id,
                b.colecao_id
            FROM 
                livros b
            JOIN 
                colecoes c ON b.colecao_id = c.id_colecao
            WHERE 
                c.id_colecao = $1;
        `, [id]);

        return result.rows as Livro[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export { getBooks, getBooksByCategoryName, getGroupBookByCollection, getBooksByCollectionId };