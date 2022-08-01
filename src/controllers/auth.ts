import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services/auth';

export default class AuthController {
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  public login = async (req: Request, res: Response) => {
    const token = await this.service.login(req.body);
    res.status(StatusCodes.OK).json({ token });
  };
}
