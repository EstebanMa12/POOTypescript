import axios from "axios";
import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { BaseHttpService } from "./base-http.services";

/**
 * Service for CRUD operations on products.
 */
export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new BaseHttpService<Product>(this.url);

  /**
   * Retrieves all products.
   * @returns A promise that resolves to an array of products.
   */
  async getAll() {
    return await this.http.getAll();
  }

  /**
   * Updates a product.
   * @param id - The ID of the product to update.
   * @param changes - The changes to apply to the product.
   * @returns A promise that resolves to the updated product.
   */
  async update(id: Product['id'], changes: UpdateProductDto) {
    return await this.http.update(id, changes);
  }
}

// Ahora se hace como si se heredara de BaseHttpService
export class ProductCRUDService2 extends BaseHttpService<Product>{
  otroRequest(){
    this.url;
    //code
    //code
  }

}
