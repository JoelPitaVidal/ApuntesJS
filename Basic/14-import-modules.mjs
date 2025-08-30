// Importing Modules
// -----------
// To use the code from another module, you can import it using the `import` keyword.
// You can import specific exports or the entire module as an object.
// -----------
import { add,PI,name,Circle } from './13-export-modules.mjs'; // Importing a specific function

import multiply from './13-export-modules.mjs'; // Importing the default export

console.log(add(5, 10)); // 15

console.log(PI); // 3.141592

console.log(name); // "JavaScript"

//Classes
let circle = new Circle(5);
// Area and perimeter of the circle
// toFixed is used to format a number using fixed-point notation.
console.log(circle.area().toFixed(2)); // 78.5398
console.log(circle.perimeter().toFixed(2)); // 31.4159

// The extension .mjs is used to indicate that the file is a module in environments that support ES modules.

console.log(multiply(4, 5)); // 20