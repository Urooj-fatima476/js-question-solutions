//The find method in JavaScript is used to retrieve the first element in an array that satisfies a specific condition. It returns undefined if no such element is found.//
const numbers = [1, 2, 3, 4, 5];

const foundNumber = numbers.find(num => num > 2);

console.log(foundNumber); // Output: 3
const words = ['apple', 'banana', 'kiwi', 'grape', 'orange'];

const concatenatedString = words
  .filter(word => word.length > 4) // Filter strings with length greater than 4
  .map(word => word.toUpperCase()) // Convert to uppercase
  .reduce((result, word) => result + '-' + word); // Concatenate with '-'

console.log(concatenatedString); // Output: "-BANANA-KIWI-ORANGE"
//Callback functions in the context of array methods are functions that are passed as arguments to other functions. They are executed later, usually when an 
//asynchronous operation is completed or when the array method iterates through the elements.
const numberrs = [1, 2, 3, 4, 5];

const squaredNumbers = numberrs.map(function (num) {
  return num ** 2;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
