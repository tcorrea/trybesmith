import connection from '../models/connection';
import Model from '../models/product';
import Product from '../interfaces/product';

export default class ProductService {
  public model: Model;

  constructor() {
    this.model = new Model(connection);
  }

  public async index(): Promise<Product[]> {
    const products: Product[] = await this.model.index();
    return products;
  }

  // public async show(id: number): Promise<Product> { };
  public async store(product: Product): Promise<Product> {
    const productStored: Product = await this.model.store(product);
    return productStored;
  }
  // public async update(id: number) { };
  // public async destroy(id: number) { };
}
