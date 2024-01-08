const mixedIntegers = [5, -2, 10, -8, 3, 1, -6, 7];

const averageOfPositiveNumbers = mixedIntegers
  .filter(num => num > 0) // Filter positive numbers
  .reduce((sum, num, index, arr) => sum + num / arr.length, 0); // Calculate average

const roundedAverage = averageOfPositiveNumbers.toFixed(2);

console.log(parseFloat(roundedAverage)); // Output: 5.29
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 19 }
  ];
  
  const adults = people.filter(person => person.age >= 18);
  
  console.log(adults);
  const stringsArray = ['apple', 'banana', 'kiwi', 'grape', 'orange'];

const sortedStrings = stringsArray.sort((a, b) => {
  // Sort based on lengths in ascending order
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    // Maintain relative order if lengths are the same
    return stringsArray.indexOf(a) - stringsArray.indexOf(b);
  }
});

console.log(sortedStrings);
// Output: ['kiwi', 'grape', 'apple', 'banana', 'orange']
  