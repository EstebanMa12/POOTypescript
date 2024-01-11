export enum AccessType{
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}


export interface Category {
  id:    number;
  name:  string;
  image: string;
  access?: AccessType
}
