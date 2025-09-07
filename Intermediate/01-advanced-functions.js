//Advanced Functions

//Function Expressions
const greet = function (name) {
    
}

greet("World"); // Hello, World!

function processGreeting(greetFunction, name) {
    greetFunction(name);
}

function returnGreeting() {
    return greet;
}

processGreeting(greet, "Alice"); // Hello, Alice!
const greet2 = returnGreeting();
greet2("Bob"); // Hello, Bob!

//Advanced arrow Functions

const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// - This lexical binding: Arrow functions do not have their own `this` context. 
// Instead, they inherit `this`from the surrounding lexical scope.
// - Implicit return: If the function body consists of a single expression, 
// you can omit the curly braces and the `return` keyword. The result of the expression will be returned automatically.
// - No `arguments` object: Arrow functions do not have their own `arguments` object. 
// If you need to access the arguments passed to an arrow function, you can use rest parameters (`...args`).

const handler = {
    name: "Handler",
    greeting: function() {
        console.log(`Hello ${this.name}`);
    },

    arrowGreeting: () => {
        console.log(`Hello ${this.name}`);
    }
}

// The arrow function creates a lexical binding for `this`, which means it does not refer to the `handler` object.

handler.greeting(); // Hello Handler}
handler.arrowGreeting(); // Hello undefined

// IIFE (Immediately Invoked Function Expression)

// An IIFE is a function that is defined and immediately invoked.
(function() {
    console.log("Classic IIFE");
})(); // This function runs immediately upon definition.

// IIFE with arrow function
(() => {
    console.log("Arrow IIFE");
})(); // This arrow function runs immediately upon definition.

// Rest Parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 15)); // 25

// Spread Operator
// The spread operator (`...`) allows an iterable (like an array) 
// to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
const arr1 = [1, 2, 3];
function sumThree(a, b, c) {
    return a + b + c;
}

console.log(sumThree(1, 2, 3)); // 6
console.log(sumThree(...arr1)); // 6

// Closures
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
function createCounter() {
    let count = 0; // Private variable
    return function() {
        count ++
        console.log(count);
    }
}
const counter = createCounter();
counter(); // 1
counter(); // 2

// Recursivity
// A recursive function is a function that calls itself in order to solve a problem.
function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1