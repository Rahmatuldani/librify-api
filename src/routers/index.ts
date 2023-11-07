import express from 'express';
import bookRouter from './bookRouter';

const routers = express.Router();

routers.use('/books', bookRouter);

export default routers;