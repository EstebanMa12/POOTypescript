import { ProductHttpService } from "./services/product-http.services";

(async()=>{
    const productService = new ProductHttpService();
    console.log(`${'-'.repeat(20)} Async ${'-'.repeat(20)}`); // start
    const productsAsync = await productService.getAll();
    console.log(productsAsync.length)
    console.log(productsAsync.map(item => item.price ))
    // Update
    const productId = productsAsync[0].id;
    const product = await productService.update(productId,{
      title:'cambio de titulo http',
      price: 200,
      description: 'La nueva descripción',
    })
    console.log(`${'-'.repeat(20)} Update ${'-'.repeat(20)}`); // start
    // FindOne
    const productFindOne = await productService.findOne(productId);
    console.log(`${'-'.repeat(20)} Find One ${'-'.repeat(20)}`); // start
    console.log(productFindOne)
})()
