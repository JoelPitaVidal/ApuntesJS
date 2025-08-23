// Objects

// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
// They are used to store and manage related data and functionality in a structured way.
// Creating an object using object literal syntax
let person = {
    name: "Joel",
    age: 22,
    email: "example@gmail.com",
    isStudent: true,
    // Method (function) inside an object
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Accessing object properties
console.log(person.name); // Accessing using dot notation
console.log(person["email"]); // Accessing using bracket notation
// Modifying object properties
person.age = 23; // Modifying using dot notation
person["isStudent"] = false; // Modifying using bracket notation
console.log(person.age); // 23
console.log(person.isStudent); // false

// Deleting a property from an object
delete person.email;
console.log(person.email); // undefined

// New properties can be added to an object at any time
person.country = "Spain";
console.log(person.country); // "Spain"

// Calling the method inside the object
person.greet(); // "Hello, my name is Joel and I am 23 years old."

// Nested objects
let student = {
    name: "Alice",
    age: 20,
    walk: function() { 
        console.log(`${this.name} can walking.`); 
    },
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
    },
    courses: ["Math", "Science", "Art"]
};
console.log(student.address.city); // "Wonderland"
console.log(student.courses[1]); // "Science"
// Accessing nested object properties and array elements
console.log(student.address.street); // "123 Main St"
console.log(student.courses[0]); // "Math"
// Modifying nested object properties
student.address.zip = "54321";
console.log(student.address.zip); // "54321"

// Iterating over object properties
// Using for...in loop to iterate over keys in the object
for (let key in student) {
    // Check if the property belongs to the object itself and not its prototype
    if (student.hasOwnProperty(key)) {
        // Logging key-value pairs
        console.log(`${key}: ${student[key]}`);
    }
}
// In a function its important to use 'this' to refer to the current object context
student.walk(); // "Alice can walk"
// 'this' refers to the student object inside the walk method

// Functions as object methods
// Functions can be defined as methods within objects to perform actions related to the object.
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: Division by zero";
        }
    }
};
