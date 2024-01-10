import { Product } from "../models/product.model"
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto"
import { faker } from "@faker-js/faker"
import { ProductService } from "../models/product-service.models"

export class ProductMemoryService implements ProductService{
  private products: Product[] = []

  create(data: CreateProductDto):Product{
    const newProduct={
      ...data,
      id :faker.number.int(),
      category :{
        id :data.categoryId,
        name :faker.commerce.department(),
        image :faker.image.urlPicsumPhotos(),
      }
    }
      return this.add(newProduct)
  }
  update(id:Product['id'], changes: UpdateProductDto): Product{
    const index = this.products.findIndex(item => item.id === id)
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }
  add(product: Product){
    this.products.push(product)
    return product
  }
  findOne(id: Product['id']){
    return this.products.find(item => item.id === id)
  }
  getAll(){
    return this.products
  }
}



