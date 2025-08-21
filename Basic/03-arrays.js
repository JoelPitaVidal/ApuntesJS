// Arrays in JavaScript
// An array is a collection of elements, which can be of any type, including numbers, strings, objects, and even other arrays.

// Creating arrays
// There are two common ways to create an array in JavaScript:
let array = []
let array2 = new Array();

console.log(array);
console.log(array2);

// Creating an array with elements
myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

// Both will create an array with a single element, the number 3.
myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);
// Creating an array with multiple elements
myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

// Creating an array with mixed types
myArray = ["", "a", "b", "c", 37];

myArray2 = new Array("", "a", "b", "c", 37);
// Both will create an array with mixed types.
console.log(myArray);
console.log(myArray2);

// Accessing elements in an array
// You can access elements in an array using their index, which starts at 0.
myArray2 = new Array(3)
//myArray2[0] = "a";
myArray2[1] = "b";
myArray2[2] = "c";

console.log(myArray2);
// This will log the first element of the array, which is "a".
myArray = []

// You can also access elements using the index directly.
//myArray[0] = "a";
myArray[1] = "b";
myArray[2] = "c";

console.log(myArray);

// This will log the second element of the array, which is "b".
myArray = []

// push y pop

// push adds an element to the end of the array
myArray.push("a");
myArray.push("b");
myArray.push("c");

console.log(myArray);
// This will log the last element and remove it from the array
console.log(myArray.pop()); 
// pop removes the last element from the array
myArray.pop();

console.log(myArray);

// shift y unshift
// shift removes the first element from the array
myArray.shift();
// unshift adds an element to the beginning of the array
myArray.unshift("a");
myArray.unshift("b");
myArray.unshift("c");
console.log(myArray);

// length
console.log(myArray.length); // This will log the length of the array

// clear
myArray = [];
console.log(myArray); // This will log an empty array

// slice
myArray = [1, 2, 3, 4, 5];
console.log(myArray.slice(1, 3)); // This will log [2, 3], slicing from index 1 to index 3 (exclusive)

