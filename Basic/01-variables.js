// Basic/01-variables.js

// This file demonstrates the use of variables in JavaScript.
var helloworld = "Hello, World!";
console.log(helloworld);

// Variables can be declared using var, let, or const.
helloworld = "Hello, Universe!";
console.log(helloworld);

// Using let to declare a variable
let greeting = "Hello, World!";
console.log(greeting);

// Using const to declare a constant variable
helloworld2 = "Hello, World! 2 with no var or let";
console.log(helloworld2);

// This will throw an error because helloworld2 is not declared with var or let.
// console.log(helloworld2); // Uncommenting this line will throw an error
const greeting2 = "Hello, World! 2 with const";
console.log(greeting2);

greeting2 = "Hello, World! 2 with const and no var or let";
 // This will throw an error because greeting2 is a constant and cannot be reassigned.
console.log(greeting2);
// greeting2 = "Hello, World! 2 with const and no var or let"; // Uncommenting this line will throw an error
