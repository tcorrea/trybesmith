import { Router } from 'express';
import UserController from '../controllers/user';

require('express-async-errors');

const controller = new UserController();

const router = Router();

router.post('/', controller.store);

export default router;
