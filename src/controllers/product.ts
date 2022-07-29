import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/product';
import Service from '../services/product';

export default class ProductController {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  public index = async (_req: Request, res: Response) => {
    const products: Product[] = await this.service.index();
    res.status(StatusCodes.OK).json(products);
  };
}
