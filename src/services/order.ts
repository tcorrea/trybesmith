import connection from '../models/connection';
import Model from '../models/order';
import Order from '../interfaces/order';

export default class OrderService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public async index(): Promise<Order[]> {
    const orders: Order[] = await this.model.index();
    return orders;
  }
}
