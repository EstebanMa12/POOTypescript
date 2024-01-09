export class Animal {

  constructor(protected name: string) {}

  eat() {
    console.log(`${this.name} is eating.`);
  }
  greeting(){
    console.log(`Hello ${this.name}`);
  }
  protected doSomething(){
    console.log(`Doing something with ${this.name}`);
  }
}

export class Dog extends Animal {
  constructor(name: string,
    public breed: string) {
    super(name);
  }
  protected doSomething(): void {
    console.log(`Doing something with POLIMORFISM`);
  }
  bark(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`${this.name} is barking.`)
    };
    this.doSomething();
    super.doSomething();
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.eat(); // Output: Buddy is eating.
myDog.bark(3); // Output: Buddy is barking.
// changing the name
// myDog.name = "Buddy2";
myDog.greeting(); // Output: Hello Buddy2
