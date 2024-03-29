export class myDate{

  constructor(
    private day: number,
    public month: number,
    public year: number
    ){}

  printFormat():string{
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  addDate(amount:number, type: 'days'|'months'|'years'){
    if(type === 'days'){
      this.day += amount;
    }
    if(type === 'months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year += amount;
    }
  }
  private addPadding(value: number){
  if(value < 10){
    return `0${value}`;
  }
  return value.toString();
  }

  getDay(){
    return this.day;
  }
}
const date = new myDate(23,9,2021);
console.log(date.printFormat());
date.addDate(5,'days');
console.log(date.printFormat());
date.addDate(3,'months');
console.log(date.printFormat());
console.log(date.getDay());
