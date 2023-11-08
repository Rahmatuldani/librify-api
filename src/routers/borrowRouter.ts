import express from 'express';
import { addBorrow, deleteBorrow, getBorrow } from '../controllers/borrowController';
import { validateBorrow } from '../middlewares/validator';

const borrowRoute = express.Router();

borrowRoute.get('/', getBorrow);
borrowRoute.post('/', validateBorrow, addBorrow);
borrowRoute.delete('/', deleteBorrow);

export default borrowRoute;