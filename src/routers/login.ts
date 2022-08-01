import { Router } from 'express';
import AuthController from '../controllers/auth';

const controller = new AuthController();

const router = Router();

router.post('/', controller.login);

export default router;
