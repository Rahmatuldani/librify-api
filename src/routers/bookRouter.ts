import express from 'express';
import { createBook, getBooks } from '../controllers/bookController';
import { validateBook } from '../middlewares/validator';

const bookRouter = express.Router();

bookRouter.get('/', getBooks);
bookRouter.post('/', validateBook, createBook);

export default bookRouter;