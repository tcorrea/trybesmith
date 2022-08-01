import { Router } from 'express';
import AuthController from '../controllers/auth';
import validation from '../middleware/login';

require('express-async-errors');

const controller = new AuthController();

const router = Router();

router.post('/', validation.field, controller.login);

export default router;
