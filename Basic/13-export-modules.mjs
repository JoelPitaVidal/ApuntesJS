// Exporting Modules
// -----------
// Modules are a way to organize and reuse code in JavaScript. They allow you to 
// break your code into smaller, manageable pieces, each with its own scope.
//  This helps to avoid naming conflicts and makes it easier to maintain and understand your code.

// Exporting and Importing
// You can export variables, functions, or classes from one module and import them 
// into another module using the `export` and `import` keywords.

// The extension .mjs is used to indicate that the file is a module in environments that support ES modules.
// -----------

export function add(x, y) {
    return x + y;
}

console.log(add(5, 3)); // 8

// Properties 
export const PI = 3.141592;
export let name = "JavaScript";

// Classes
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * PI * this.radius;
    }
}
// Default Export
export default function multiply(x, y) {
    return x * y;
}
