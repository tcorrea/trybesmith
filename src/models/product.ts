import { Pool } from 'mysql2/promise';
import Product from '../interfaces/product';

export default class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async index(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await this.connection.execute(query);
    return rows as Product[];
  }
  // public async store() { };
  // public async show(id: number) { };
  // public async update(id: number) { };
  // public async destroy(id: number) { };
}
