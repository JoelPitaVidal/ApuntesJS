// Console methods
console.log("This is a log message."); // General output
console.info("This is an info message."); // Informational message
console.warn("This is a warning message."); // Warning message
console.error("This is an error message."); // Error message
console.debug("This is a debug message."); // Debugging message
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]); // Display data in table format
console.time("Timer"); // Start a timer
// Some code to be timed
for (let i = 0; i < 1000000; i++) {
    // Simulating a time-consuming task
    let temp = Math.sqrt(i);
}
console.timeEnd("Timer"); // End the timer and log the elapsed time
console.assert(1 === 2, "This assertion failed!"); // Assertion (will log message if condition is false)
console.clear(); // Clear the console

// Grouping console messages
console.group("Grouped Messages");
console.log("Message 1");
console.log("Message 2");
console.groupEnd(); // End the group
console.groupCollapsed("Collapsed Group");
console.log("This group is collapsed by default.");
console.groupEnd(); // End the collapsed group
console.trace("Trace message"); // Display stack trace
console.count("Counter"); // Count occurrences
console.count("Counter");
console.count("Counter");
console.countReset("Counter"); // Reset the counter
console.count("Counter"); // Count starts from 1 again
console.dir({ name: "Charlie", age: 28 }); // Display an interactive list of the properties of the specified object

// Note: Some console methods may not be supported in all environments (e.g., older browsers).
// The appearance of console output may vary between different browsers and environments.