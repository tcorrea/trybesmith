import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async store(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
  // public async show(id: number) { };
  // public async update(id: number) { };
  // public async destroy(id: number) { };
}
