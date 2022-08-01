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
    const userFound: { id: number, username: string } = await this.model.login(username, password);

    if (!userFound) {
      const e = new Error('Username or password invalid');
      e.name = 'UNAUTHORIZED';
      throw e;
    }

    return createToken(userFound);
  }
}
