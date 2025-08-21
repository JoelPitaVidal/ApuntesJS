//Loops
// This file demonstrates the use of loops in JavaScript.

// For loop

// A for loop is used to execute a block of code a certain number of times.
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

// Using a for loop to iterate over an array
const numbers = [1, 2, 3, 4, 5];
// This will log each element of the array.
for (let i = 0; i < numbers.length; i++) {
    console.log("Elemento: " + numbers[i]);
}  

// While loop
// A while loop is used to execute a block of code as long as a specified condition is true.
let i = 0;
// This will log the value of i until it reaches 5.
while (i < 5) {
    console.log(`While loop iteration: ${i}`);
    i++;
}

// Do-while loop
// A do-while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once.
let j = 0;
do {
    console.log(`Do-while loop iteration: ${j}`);
    j++;
} while (j < 5);

// For...of loop
// A for...of loop is used to iterate over iterable objects like arrays, strings, and

// other collections.
myArray = [1, 2, 3, 4];
mySet = new Set([1, 2, 3, 4, 5]);
myMap = new Map([["Name", "Joel"],
                ["Email", "example@gmail.com"], 
                ["age", "22"]
                ]);
myString = "Hello, World!";


// Using for...of to iterate over an array
for (const number of myArray) {
    console.log(`For...of loop array element: ${number}`);
}
// Using for...of to iterate over a Set
for (const value of mySet) {
    console.log(`For...of loop Set value: ${value}`);
}
// Using for...of to iterate over a Map's values
for (const value of myMap) {
    console.log(`For...of loop Map value: ${value}`);
}
// Using for...of to iterate over a string
for (const char of myString) {
    console.log(`For...of loop string character: ${char}`);
}

//Break and Continue
// The break and continue statements can be used to control the flow of loops.

// The break statement is used to exit a loop prematurely.
for (let k = 0; k < 5; k++) {
    if (k === 3) {
        console.log("Breaking the loop at k = " + k);
        break; // Exit the loop when k is 3
    }
    console.log("Loop iteration: " + k);
}

// The continue statement is used to skip the current iteration and continue with the next one.
for (let l = 0; l < 5; l++) {
    if (l === 2) {
        console.log("Skipping iteration at l = " + l);
        continue; // Skip the rest of the loop body when l is 2
    }
    console.log("Loop iteration: " + l);
}