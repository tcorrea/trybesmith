import express from 'express';
import productRouter from './routers/product';
import userRouter from './routers/user';
import orderRouter from './routers/order';
import loginRouter from './routers/login';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
