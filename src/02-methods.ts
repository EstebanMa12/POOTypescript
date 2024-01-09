export class myDate{
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number){
      this.day = day;
      this.month = month;
      this.year = year;
  }
  printFormat():string{
    return `${this.day}/${this.month}/${this.year}`;
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

}

let date = new myDate(1, 1, 2020);
console.log(date.printFormat());
date.addDate(8,'days');
console.log(date.printFormat());
date.addDate(3,'months');
console.log(date.printFormat());

