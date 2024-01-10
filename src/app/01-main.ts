import axios from "axios";

import { Product } from "./models/product.model";

(async()=>{

  /**
   * Retrieves a list of products from the API.
   * @returns A promise that resolves to an array of Product objects.
   */
  async function getProducts(): Promise<Product[]>{
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }


  console.log(`${'-'.repeat(20)} Async ${'-'.repeat(20)}`); // start
  const productsAsync = await getProducts();
  console.log(productsAsync.map(item => `${item.id} - ${item.title}` ))
})()
