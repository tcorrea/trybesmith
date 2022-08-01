import { Request, Response, NextFunction } from 'express';
import schema from '../schema/login';

const loginMiddleware = {
  field: (req: Request, _res: Response, next: NextFunction) => {
    schema.login(req.body);
    next();
  },
};

export default loginMiddleware;
