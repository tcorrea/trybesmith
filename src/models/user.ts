import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user';

interface LoginReturn {
  id: number,
  username: string,
}

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

  public async login(username: string, password: string): Promise<LoginReturn> {
    const query = 'SELECT id, username FROM Trybesmith.Users WHERE username = ? and password = ?';

    const [rows] = await this.connection.execute(query, [username, password]);

    const [plainResult]: LoginReturn[] = Object.values(JSON.parse(JSON.stringify(rows)));

    return plainResult;
  }
}
