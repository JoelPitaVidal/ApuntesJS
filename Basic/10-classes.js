// Classes

// A class is a blueprint for creating objects with shared properties and methods.
class Person {
// The constructor method is called when a new instance of the class is created.
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Creating an instance of the Person class
let john = new Person("John", 30, "Johnny");
// Accessing properties and methods of the instance
john.greet(); // Hello, my name is John and I am 30 years old.
console.log(john.alias); // Johnny

// Default parameters in constructor
class Student {
    constructor(name, age, major = "Undeclared") {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old student majoring in ${this.major}.`);
    }
}   

// Private fields
class Car {
    // Private field (not accessible outside the class)
    #vin;

    constructor(make, model, year, vin) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#vin = vin; // Assigning value to private field
    }

    getVin() {
        return this.#vin; // Accessing private field through a public method
    }
}

// Getters and Setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter for area
    get area() {
        return this.width * this.height;
    }

    // Setter for width
    set setWidth(newWidth) {
        if (newWidth > 0) {
            this.width = newWidth;
        } else {
            console.log("Width must be positive.");
        }
    }
}

// Inheritance
class Animal {

    constructor(name) {
        this.name = name;
    }

    noise() {
        console.log(`${this.name} makes a noise.`);
    }

}
// Dog class inherits from Animal class
class Dog extends Animal {
// The constructor of the subclass must call super() to invoke the parent class constructor
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    run() {
        console.log(`${this.name} is running.`);
    }

}

let dog = new Dog("Buddy", "Golden Retriever");
dog.noise(); // Buddy makes a noise.
dog.run(); // Buddy is running.
console.log(dog.breed); // Golden Retriever

// Static methods
class MathUtils {
    // Static method (can be called without creating an instance of the class)
    static square(x) {
        return x * x;
    }
}
console.log(MathUtils.square(5)); // 25