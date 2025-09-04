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