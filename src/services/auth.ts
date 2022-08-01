import connection from '../models/connection';
import Model from '../models/user';
import createToken from './jwt';

export default class UserService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public async login(
    { username, password }: { username: string, password: string },
  ): Promise<string> {
    const userFound: object = await this.model.login(username, password);
    return createToken(userFound);
  }
}
