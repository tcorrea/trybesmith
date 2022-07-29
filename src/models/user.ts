import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user';

export default class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async store(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const query = `
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)
    `;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}
