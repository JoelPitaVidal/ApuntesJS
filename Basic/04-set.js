// set

// A Set is a collection of values where each value must be unique.
// Sets can be used to store any type of value, including objects and functions.

//Corect way to create a Set
let mySet = new Set();

//Wrong way to create a Set
let mySet2 = {}

mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

//add and delete

// Adding values to a Set using add()
mySet.add(6);
console.log(mySet);

// Removing values to a Set using delete()
//To remove a value from a Set, you must whrite the exact value you want to remove.
mySet.delete(3);
console.log(mySet);

// Checking the size of a Set
console.log(mySet.size); // 5

//has method

// Returns true if the value exists in the Set
mySet.has(2); 
console.log(mySet.has(2)); // true


//Turn a array into a Set
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let mySetFromArray = new Set(myArray);
console.log(mySetFromArray); 


//Set dont allow duplicate values
mySetFromArray.add(3); // This will not add a duplicate value
console.log(mySetFromArray.add(3));