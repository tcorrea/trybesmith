import express from 'express';
import productRouter from './routers/product';
import userRouter from './routers/user';
import orderRouter from './routers/order';
import loginRouter from './routers/login';
import error from './middleware/error';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use(error);
// app.use(((err, _req, res, _next) => {
//   const { name, message } = err;
//   switch (name) {
//     case 'BAD_REQUEST':
//       res.status(StatusCodes.BAD_REQUEST).json({ message });
//       break;
//     case 'UNAUTHORIZED':
//       res.status(StatusCodes.UNAUTHORIZED).json({ message });
//       break;
//     default:
//       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
//       break;
//   }
// }) as ErrorRequestHandler);
export default app;
