import express from 'express';
import { register } from '../controllers/authController';

const authRouter = express.Router();

authRouter.get('/register', register)

export default authRouter;