import { Router } from 'express';
import OrderController from '../controllers/order';

const controller = new OrderController();

const router = Router();

router.get('/', controller.index);

export default router;
