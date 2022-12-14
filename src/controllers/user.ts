import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import User from '../interfaces/user';
import Service from '../services/user';

export default class ProductController {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  public store = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.store(user);
    res.status(StatusCodes.CREATED).json({ token });
  };
}
