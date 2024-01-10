import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductService } from './../models/product-service.models';
import axios from 'axios';
export class ProductHttpService implements ProductService{
  private url = 'https://api.escuelajs.co/api/v1/products'

  async getAll(){
    const {data} = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto){
    const {data} = await axios.put(`${this.url}/${id}`,changes);
    return data;
  }
  async create(data: CreateProductDto){
    const {data:product} = await axios.post(this.url,data);
    return product;
  }
  async findOne(id: Product['id']){
    const {data} = await axios.get(`${this.url}/${id}`);
    return data;
  }

}
