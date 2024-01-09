export class myDate{
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number){
        this.day = day;
        this.month = month;
        this.year = year;
    }

}
let date = new myDate(1, 1, 2020);
console.log(date.day);
console.log(date.month);
console.log(date.year);

