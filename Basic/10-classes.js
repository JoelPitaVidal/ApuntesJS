// Classes

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let john = new Person("John", 30, "Johnny");
john.greet(); // Hello, my name is John and I am 30 years old.
console.log(john.alias); // Johnny