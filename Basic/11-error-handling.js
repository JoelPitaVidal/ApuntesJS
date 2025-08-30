// Error handling in JavaScript

// 1. Using try...catch
// Try is used to wrap code that may throw an error.
try {
    // Code that may throw an error
    let result = riskyOperation();
    console.log('Result:', result);
// 2. Catch is used to handle the error if one occurs
}   catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message);
// 3. Finally is used to execute code after try and catch, regardless of the outcome
} finally {
    // Code that runs regardless of whether an error occurred or not
    console.log('Execution completed.');
}


function sum(a, b) {
    // Check if both arguments are numbers
    // Typeof operator is used to check the data type of a variable
    if (typeof a !== 'number' || typeof b !== 'number') {
        // Throw a TypeError if either argument is not a number
        throw new TypeError('Both arguments must be numbers.');
    }
}

sum(5, 10); // 15

// Creating a custom error class
class ValidationError extends Error {
// The constructor method is a special method for creating and initializing an object created with a class.
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = 'ValidationError'; // Set the error name
    }
}
// Function that validates user input
function validateUserInput(input) {
    // For example, check if input is a string and has at least 5 characters
    if (typeof input !== 'string') {
        // Throw a TypeError if input is not a string
        throw new TypeError('Input must be a string.');
    }   
    if (input.length < 5) {
        // Throw a custom ValidationError if input is too short
        throw new ValidationError('Input must be at least 5 characters long.');
    }
    return true;
}