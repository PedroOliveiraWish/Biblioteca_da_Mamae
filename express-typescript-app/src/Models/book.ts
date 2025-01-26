import { RowDataPacket } from 'mysql2/promise';
import { connection } from "../database";

interface Books {
    title: string;
    author: string;
    image_url: string;
    is_read: boolean;
    category: number;
    collection: number;
}

const getBooks = async (): Promise<Books[]> => {
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
            WHERE books.read_book = 1;
    `);

        return rows as Books[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getBooksByCategoryName = async (categoryName: string): Promise<Books[]> => {
    try {
        const [rows] = await connection.execute<RowDataPacket[]>(`
            SELECT 
                b.id AS book_id,
                b.title,
                b.author,
                b.image_url,
                b.read_book,
                c.id AS category_id,
                c.name AS category_name
            FROM 
                books b
            JOIN 
                categories c
            ON 
                b.category_id = c.id
            WHERE 
                c.name = ?;
        `, [categoryName]);

        return rows as Books[];
    } catch (error) {
        console.error(error);
        return []
    }
}

const getGroupBookByCollection = async (): Promise<Books[]> => {
    try {
        const [rows] = await connection.execute<RowDataPacket[]>(`
            SELECT 
                collections.id AS collection_id,
                collections.name AS collection_name,
                MIN(books.image_url) AS book_image_url
            FROM 
                collections
            LEFT JOIN 
                books ON books.collection_id = collections.id
            GROUP BY 
                collections.id, collections.name
            ORDER BY 
                collections.id;
        `)
        return rows as Books[]
    } catch (error) {
        console.error(error);
        return []
    }
}

const getBooksByCollectionId = async (id: number): Promise<Books[]> => {
    try {
        const [rows] = await connection.execute<RowDataPacket[]>(`SELECT * FROM books WHERE collection_id = ?`, [id]);
        return rows as Books[]
    } catch (error) {
        console.error(error);
        return []
    }
}

const postBook = async (book: Books): Promise<Books> => {
    try {
        const rows = await connection.execute('INSERT INTO books (title, author, image_url, read_book, category_id, collection_id) values (?, ?, ?, ?, ?, ?)', [book.title, book.author, book.image_url, book.is_read, book.category, book.collection]);

        return rows as unknown as Books;
    } catch (error) {
        console.error(error);
        return book;
    }
}

export { postBook, getBooks, getBooksByCategoryName, getGroupBookByCollection, getBooksByCollectionId };