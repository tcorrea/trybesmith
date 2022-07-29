import { Router } from 'express';
import ProductController from '../controllers/product';

const controller = new ProductController();

const router = Router();

router.get('/', controller.index);

export default router;
