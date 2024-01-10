//ABSTRACT CLASSES
//abstract classes are classes that can't be instantiated
//they are only meant to be extended
//they can contain implementation details

// Abstract base class for shapes
abstract class Shape {
  // Protected color property
  protected color: string;

  // Constructor with color parameter
  constructor(color: string) {
    this.color = color; // Initialize color
  }

  // Abstract method to calculate area
  abstract calculateArea(): number;

 // Display color of the shape
  display(): void {
    console.log(`This shape is ${this.color}.`); // Log color
  }
 }

// Class for Circle that extends Shape class
class Circle extends Shape {
  // Private radius property
  private radius: number;

  // Constructor with color and radius parameters
  constructor(color: string, radius: number) {
    // Call Shape constructor with color parameter
    super(color);
    this.radius = radius;
  }

  // Method to calculate area of circle
  // Return PI * radius^2
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Class for Rectangle shape
class Rectangle extends Shape {
  // Private width property
  private width: number;
  // Private height property
  private height: number;

  // Constructor with color, width, and height parameters
  constructor(color: string, width: number, height: number) {
    // Call Shape constructor
    super(color);
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  calculateArea(): number {
    // Return width * height
    return this.width * this.height;
  }
 }

const circle = new Circle("red", 5);
circle.display(); // Output: This shape is red.
console.log("Circle area:", circle.calculateArea()); // Output: Circle area: 78.53981633974483

const rectangle = new Rectangle("blue", 4, 6);
rectangle.display(); // Output: This shape is blue.
console.log("Rectangle area:", rectangle.calculateArea()); // Output: Rectangle area: 24

// const example = new Shape('blue'); //! No se puede crear una instancia de una clase abstracta


