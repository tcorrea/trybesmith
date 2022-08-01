import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services/order';

export default class OrderController {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  public index = async (_req: Request, res: Response) => {
    const orders = await this.service.index();
    res.status(StatusCodes.OK).json(orders);
  };
}
