class Animal {

  constructor(public name: string) {}

  eat() {
    console.log(`${this.name} is eating.`);
  }
  greeting(){
    console.log(`Hello ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.eat(); // Output: Buddy is eating.
myDog.bark(); // Output: Buddy is barking.
