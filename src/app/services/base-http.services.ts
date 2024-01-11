import { Product } from './../models/product.model';
import axios from "axios";
import { Category } from "../models/category.models";
export class BaseHttpService<TypeClass>{
  constructor(
    private url: string
  ){}
  async getAll(){
    const {data} = await axios.get<TypeClass[]>(this.url)
    return data
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
})()
