import connection from '../models/connection';
import Model from '../models/user';
import User from '../interfaces/user';
import createToken from './auth';

export default class ProductService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public async store(user: User): Promise<string> {
    const userStored: User = await this.model.store(user);
    const { password, ...userWithoutPassword } = userStored;
    return createToken(userWithoutPassword);
  }
}
