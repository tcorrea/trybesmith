import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order';

export default class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async index(): Promise<Order[]> {
    const query = `
        SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders AS o
        INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
        GROUP BY o.id
        ORDER BY o.userId
    `;
    const [rows] = await this.connection.execute(query);
    return rows as Order[];
  }
}
