import axios from "axios";

(async()=>{
  function delay (time: number){
    const promise = new Promise<boolean>((resolve) =>{
      setTimeout(()=>{
        resolve(true)
      }, time);
    });
    return promise;
  }
  // get all the data for a specific product id.
  function getProducts(){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync(){
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log(`${'-'.repeat(20)} start ${'-'.repeat(20)}`); // start
  const rta = await delay(300)
  console.log(rta)

  console.log(`${'-'.repeat(20)} Axios ${'-'.repeat(20)}`); // start
  const products = await getProducts();
  console.log(products.data)

  console.log(`${'-'.repeat(20)} Async ${'-'.repeat(20)}`); // start
  const productsAsync = await getProductsAsync();
  console.log(productsAsync)
})()
