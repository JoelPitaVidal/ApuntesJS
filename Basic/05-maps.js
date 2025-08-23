//Maps in JavaSCript
// Maps are a collection of key-value pairs where keys can be of any type.
// They are similar to objects, but with some differences in behavior and functionality.

// Creating a Map
let myMap = new Map();
console.log(myMap);

// Adding key-value pairs to a Map
//Maps dont allow duplicate keys
myMap = new Map([["Name", "Joel"],
                ["Email", "example@gmail.com"], 
                ["age", "22"]
                ]);
console.log(myMap);

// Methods and properties of a Map

//Set
// Adding a key-value pair using set()
myMap.set("Country", "Spain");
console.log(myMap);

//Get
// Getting a value by key using get()
let name = myMap.get("Name");
console.log(name); // "Joel"

//Has
// Checking if a key exists using has()
let hasEmail = myMap.has("Email");
console.log(hasEmail); // true

//Delete
// Removing a key-value pair using delete()
myMap.delete("Email");
console.log(myMap);

//Size
// Getting the number of key-value pairs using size
let size = myMap.size;
console.log(size); // 0

//Clear
// Removing all key-value pairs using clear()
myMap.clear();
console.log(myMap); // Map(0) {}


//Keys,Values and Entries
// Maps provide methods to get all keys, values, or entries (key-value pairs).
// Getting all keys using keys()
console.log(myMap.keys()); // MapIterator {}
// Getting all values using values()
console.log(myMap.values()); // MapIterator {}
// Getting all entries (key-value pairs) using entries()
console.log(myMap.entries()); // MapIterator {}
