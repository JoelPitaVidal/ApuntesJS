// Destructuing and Spreading

// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
// Spreading allows you to expand elements of an iterable (like an array or object) into individual elements.

myArray = [1, 2, 3, 4, 5];



// Destructuring an array
let [first, second, third, fourth, fifth] = myArray;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
console.log(fifth); // 5
// Ignoring some values
let [one, , three] = myArray;
console.log(one); // 1
console.log(three); // 3
// Using rest operator to collect remaining values
let [head, ...tail] = myArray;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Destructuring an object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
let { name, age, city } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// Destructuring nested objects
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
let { address: { street, city: addressCity, zip } } = student;
console.log(street); // "123 Main St"
console.log(addressCity); // "Wonderland"
console.log(zip); // "12345"