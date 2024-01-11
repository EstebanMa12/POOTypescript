import { IsEmail, IsUrl } from "class-validator";

import { AccessType, Category } from "../models/category.models";


export interface ICreateCategoryDto extends Omit<Category, 'id'>{}


export class CreateCategoryDto implements ICreateCategoryDto{
  name!:  string;
  @IsUrl()
  image!: string;
  access?: AccessType|undefined;
}
