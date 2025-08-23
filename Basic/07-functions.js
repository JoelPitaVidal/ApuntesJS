//Functions

// Function declaration
// This function takes a name as an argument and returns a greeting string
function nameFunction(name) {
    return `Hello, ${name}!`;
}

// Function expression
// This is a function expression that assigns a function to a variable
myFunction = nameFunction("Joel");
console.log(myFunction); 

// Anonymous function
// An anonymous function is a function that does not have a name
// It can be used as a callback or assigned to a variable
// Here, we define an anonymous function that takes a name and returns a greeting string
let myAnonymousFunction = function(name) {
    return `Hello, ${name}!`;
};

// Calling the anonymous function
let anonymousGreeting = myAnonymousFunction("Anonymous");
console.log(anonymousGreeting);

// Arrow function
// An arrow function is a more concise syntax for writing functions
// It does not have its own 'this' context, which can be useful in certain situations
// This is an arrow function that takes a name and returns a greeting string
let arrowFunction = (name) => {
    return `Hello, ${name}!`;
}

// Calling the arrow function
let arrowGreeting = arrowFunction("Arrow");
console.log(arrowGreeting);

// Function with default parameters
function greet(name = "Default") {
    return `Hello, ${name}!`;
}
// Calling the function with and without an argument
console.log(greet("Argument")); // "Hello, Charlie!"
console.log(greet()); // "Hello, Guest!"    

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}   

// Default parameters allow you to set default values for function parameters if no value or undefined is passed.
function multiply(a = 0, b = 0) {
    console.log(a * b);
}
multiply(5, 2); // 10
multiply(5); // 0
multiply(); // 0

// Calling the function with multiple arguments
console.log(sum(1, 2, 3, 4)); // 10
// Function with a callback
function processArray(arr, callback) {
    return arr.map(callback);
}

//Return a value from a function
function double(num) {
    return num * 2;
}
// Using the processArray function with a callback
let numbersArray = [1, 2, 3, 4];
let doubledArray = processArray(numbersArray, double);
console.log(doubledArray); // [2, 4, 6, 8]

// Nested functions
// Functions can be nested, meaning you can define a function inside another function.
// This is an example of a nested function.
function extern() {
    console.log("This is the outer function.");
    function intern() {
        console.log("This is the inner function.");
    }
    // Calling the inner function
    intern();
    return "Outer function completed.";
}
// Calling the outer function
extern();
// Calling the inner function
// intern(); // This will throw an error because intern is not accessible outside extern
// The inner function intern is only accessible within the outer function extern.

// Superior functions
// Functions can be passed as arguments to other functions, returned from functions, or assigned to variables.
function superiorFunction(callback) {
    console.log("This is the superior function.");
    return callback();
}
// Using a superior function with a callback
let result = superiorFunction(() => {
    return "Callback executed!";
});
console.log(result); // "Callback executed!"

// ForEach
// The forEach method is used to execute a provided function once for each array element.
let myArrayForEach = [1, 2, 3, 4, 5];
mySet = new Set([1, 2, 3, 4, 5]);
myMap = new Map([["Name", "Joel"],
                ["Email", "example@gmail.com"], 
                ["age", "22"]
                ]);
myArrayForEach.forEach((element) => {
    console.log(`Element: ${element}`);
});
// This will log each element of the Set using forEach.
mySet.forEach((value) => {
    console.log(`Set value: ${value}`);
});
// This will log each value of the Map using forEach.
myMap.forEach((value, key) => {
    console.log(`Map key: ${key}, value: ${value}`);
});
