// Import dependencies
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Import database connection and models
import { connection_database } from './database';
import {
    getBooks,
    getBooksByCategoryName,
    getGroupBookByCollection,
    getBooksByCollectionId,
    postBook
} from './Models/book';
import { getCollections } from './Models/collections';
import { getCategories } from './Models/categories';
import { getWishes, updateWish } from './Models/wish';

// Initialize Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Establish database connection
connection_database();

// Routes

// Get all categories
app.get('/api/category', async (req: Request, res: Response) => {
    try {
        const categories = await getCategories();
        res.send(categories);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching categories' });
    }
});

// Get books or filter by category
app.get('/api/book', async (req: Request, res: Response) => {
    const selectedCategories = req.headers.options as string;

    try {
        if (selectedCategories) {
            const booksSelected = await getBooksByCategoryName(selectedCategories);
            res.send(booksSelected);
        } else {
            const books = await getBooks();
            res.send(books);
        }
    } catch (error) {
        res.status(400).send({ message: 'Error fetching books' });
    }
});

// Get all collections
app.get('/api/collection', async (req: Request, res: Response) => {
    try {
        const collections = await getCollections();
        res.send(collections);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching collections' });
    }
});

// Get grouped books by collection
app.get('/api/collectionBook', async (req: Request, res: Response) => {
    try {
        const collections_books = await getGroupBookByCollection();
        res.send(collections_books);
    } catch (error) {
        res.status(400).send({ message: 'Error fetching books by collection' });
    }
});

// Get books by collection ID
app.get('/api/collection/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const convertedCollectedIdToNumber = parseInt(id);

    try {
        const books = await getBooksByCollectionId(convertedCollectedIdToNumber);
        res.send(books);
    } catch (error) {
        res.status(400).send({ message: 'Error fetching books by collection ID' });
    }
});

app.get('/api/wish', async (req: Request, res: Response) => {
    try {
        const wishes = await getWishes();

        res.send(wishes)
    } catch (error) {
        res.status(400).send({ message: 'Error fetching wishes' });
    }
})

// Add a new book
app.post('/api/book', async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        await postBook(req.body);
        res.status(201).send({ message: 'Book added successfully!' });
    } catch (error) {
        res.status(400).send({ message: 'Error adding book' });
    }
});

// Update a book
app.put('/api/wish/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const convertedWishIdToNumber = parseInt(id);

    try {
        await updateWish(convertedWishIdToNumber);
        res.status(200).send({ message: 'Wish updated successfully!' });
    } catch (error) {
        res.status(400).send({ message: 'Error updating wish' });
    }
})

// Start the server
const port: number = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
