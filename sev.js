//The filter method in JavaScript is used to create a new array with elements that pass a specific condition. It does not modify the original array but instead returns a new array containing only the elements that satisfy the given condition.
//Example
const numbbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//The sort method in JavaScript is used to sort the elements of an array in place. By default, the sort method converts elements into strings
// and then performs lexicographic (dictionary) sorting. For numbers, this can lead to unexpected results.
const numberrs = [10, 2, 8, 5, 1];

numberrs.sort();
console.log(numberrs); // Output: [1, 10, 2, 5, 8]
//The reduce method in JavaScript is used to iterate over the elements of an array and accumulate a single result. It takes a callback function as its argument,
// which has two parameters: an accumulator and the current value. The result of each iteration is stored in the accumulator, and the final accumulated value is returned.
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
