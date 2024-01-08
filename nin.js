//Immutable Operations:
//Immutability is the concept of not modifying the original data and instead creating a new copy with the desired changes. When working with array 
//methods in JavaScript, immutability is often preferred as it helps prevent unintended side effects and makes the code more predictable.
//Example of performing immutable operations with map:
const originalArray = [1, 2, 3, 4, 5];

// Creating a new array with doubled values using map
const doubledArray = originalArray.map(num => num * 2);

console.log(originalArray); // Original array is unchanged: [1, 2, 3, 4, 5]
console.log(doubledArray); // New array with doubled values: [2, 4, 6, 8, 10]
//Performance Considerations:
//The main difference between map and forEach is that map returns a new array with the results of applying a function to each element, while forEach simply iterates
// over the array and executes a provided function for each element without creating a new array.

//Performance implications:
//map creates a new array and returns it, making it suitable when you want to create a modified version of the array.
//forEach is often faster in terms of raw iteration since it doesn't create a new array.
//Use map when you need a new array with modified elements:const originalArray = [1, 2, 3, 4, 5];
const originallArray = [1, 2, 3, 4, 5];

const doubleddArray = originallArray.map(num => num * 2);

console.log(doubleddArray); // Output: [2, 4, 6, 8, 10]

