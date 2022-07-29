import express from 'express';
import productRouter from './routers/product';
import userRouter from './routers/user';
import orderRouter from './routers/order';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
