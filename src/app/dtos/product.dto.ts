import { Category } from "../models/category.models";
import { Product } from "../models/product.model";

export interface CreateProductDto extends Omit<Product, 'id'|'category'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto>{}

// type example = Pick<Product,'title'|  'image'|  'description'|  'stock'|  'sizes'|  'color'|  'price'|  'isNew'|  'tags'>

// type example2 = Required<Product >

// export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
//   readonly tags?: ReadonlyArray<string>;
// }
