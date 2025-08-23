// Destructuing and Spreading

// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
// Spreading allows you to expand elements of an iterable (like an array or object) into individual elements.

// Array Destructuring
let rgb = [255, 200, 0];
let [red, green, blue] = rgb;
console.log(red);   // 255
console.log(green); // 200
console.log(blue);  // 0
// You can skip elements by leaving the space empty
let [r, , b] = rgb;
console.log(r); // 255
console.log(b); // 0
// You can use the rest operator to collect the remaining elements into an array
let [first, ...rest] = rgb;
console.log(first); // 255
console.log(rest);  // [200, 0]


