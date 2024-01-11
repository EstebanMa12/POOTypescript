import { Product } from './../models/product.model';
import axios from "axios";
import { Category } from "../models/category.models";
import { UpdateProductDto } from '../dtos/product.dto';
export class BaseHttpService<TypeClass>{
  constructor(
    protected url: string
  ){}
  async getAll(){
    const {data} = await axios.get<TypeClass[]>(this.url)
    return data
  }
  async update<ID, DTO>(id: ID, changes: DTO){
    const {data} = await axios.put(`${this.url}/${id}`,changes);
    return data;
  }

}

(async ()=>{
  const url = 'https://api.escuelajs.co/api/v1/products'
  const productService = new BaseHttpService<Product>(url);
  const rta = await productService.getAll();
  console.log(rta.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const productCategory = new BaseHttpService<Category>(url2);
  const rta2 = await productCategory.getAll();
  console.log(rta2.length);

  productService.update<Product['id'],UpdateProductDto>(1,{
    price: 5000,
  });
  // Se imprime el cambio
  const rta3 = await productService.getAll();
  console.log(rta3[0].price);


})()
