import type { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorHandler = ((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'BAD_REQUEST':
      res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    case 'UNAUTHORIZED':
      res.status(StatusCodes.UNAUTHORIZED).json({ message });
      break;
    default:
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
      break;
  }
}) as ErrorRequestHandler;

export default errorHandler;
