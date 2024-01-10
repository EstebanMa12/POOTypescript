// Consumiendo ProductMemoryService

import { ProductMemoryService } from './services/product-memory.services';

const productService = new ProductMemoryService();
productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Description 1',
  categoryId: 1,
  images:[]
});
const products = productService.getAll()
const productId = products[0].id;

productService.update(productId,{
  title:'cambio de titulo'
})

const rta =productService.findOne(productId)
console.log(rta)





