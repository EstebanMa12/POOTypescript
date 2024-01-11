import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";

import { AccessType, Category } from "../models/category.models";


export interface ICreateCategoryDto extends Omit<Category, 'id'>{}


export class CreateCategoryDto implements ICreateCategoryDto{

  @IsNotEmpty()
  @Length(4,140)
  name!:  string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  @IsEnum(AccessType)
  @IsOptional()
  access?: AccessType|undefined;
}

(async()=>{
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'h';
    dto.image = 'https://google.com';
    await validateOrReject(dto)
    console.log(dto);
  } catch (error) {
    console.log(error);
  }
})()
