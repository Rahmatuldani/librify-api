import express from 'express';
import { createBook, getBooks, deleteBook } from '../controllers/bookController';
import { validateBook } from '../middlewares/validator';

const bookRouter = express.Router();

bookRouter.get('/', getBooks);
bookRouter.post('/', validateBook, createBook);
bookRouter.delete('/', deleteBook);

export default bookRouter;