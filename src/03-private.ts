export class myDate{
  private day: number;
  private month: number;
  private year: number;

  constructor(day: number, month: number, year: number){
      this.day = day;
      this.month = month;
      this.year = year;
  }
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


}
const date = new myDate(23,9,2021);
console.log(date.printFormat());
