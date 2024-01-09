export class myDate{

  constructor(
    private _day: number,
    public _month: number,
    public _year: number
    ){}

  printFormat():string{
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this._year}`;
  }

  addDate(amount:number, type: 'days'|'months'|'years'){
    if(type === 'days'){
      this._day += amount;
    }
    if(type === 'months'){
      this._month += amount;
    }
    if(type === 'years'){
      this._year += amount;
    }
  }
  private addPadding(value: number){
    if(value < 10){
      return `0${value}`;
    }
    return value.toString();
  }

  get day(){
    return this._day;
  }

  get month(){
    return this._month;
  }

  get year(){
    return this._year;
  }
  get isLeapYear(): boolean{
    return this._year % 4 === 0 && this._year % 100 !== 0 || this._year % 400 === 0;
  }
}
const date = new myDate(23,9,2004);
console.log(date.printFormat());
date.addDate(5,'days');
console.log(date.printFormat());
date.addDate(3,'months');
console.log(date.printFormat());
console.log(date.day);
console.log(date.month);
console.log(date.year);
console.log(date.isLeapYear);
