export class myDate{

  constructor(
    private _day: number,
    private _month: number,
    private _year: number
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
  set day(day: number){
    this._day = day;
  }

  set month(month: number){
    if(month>=1 && month<=12)
    {
      this._month = month;
    }
    else{
      throw new Error('month is out of range');
    }
  }

  set year(year: number){
    this._year = year;
  }
}
const date = new myDate(23,9,2004);
date.addDate(3,'months');
console.log(date.printFormat());

date.day = 29;
date.month = 6;
date.year = 1999;
console.log(date.printFormat());
date.month = 24;

