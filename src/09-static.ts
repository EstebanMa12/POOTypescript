class myMath{
    static readonly PI: number = 3.14;
    static area(radius: number): number{
        return this.PI * radius * radius;
    }
    static max(...numbers:number[]){
        return numbers.reduce((previous, current) => previous > current ? previous : current);
    }
}

console.log(myMath.PI);
console.log(myMath.area(5));

console.log(`myMath.max`,myMath.max(1,2,3,4,5,6,7,8,9,10));
console.log(`Math.max`,Math.max(1,2,3,4,5,6,7,8,9,10));
