// Sample array of integers
const originalArray = [1, 2, 3, 4, 5];

// Using map to square each element
const squaredArray = originalArray.map(x => x ** 2);

// Display the squared array
console.log(squaredArray);

// Sample array of strings
const originalArrayy = ["apple", "banana", "orange", "kiwi", "grape"];

// Using filter to exclude strings with length less than 5
// Using map to capitalize the remaining strings
const resultArray = originalArrayy
  .filter(str => str.length >= 5)
  .map(str => str.toUpperCase());

// Display the result array
console.log(resultArray);
