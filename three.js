// Sample array of integers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using reduce to find the total sum of even numbers
const totalSumOfEven = numbers.reduce((acc, current) => {
  if (current % 2 === 0) {
    // Add the current even number to the accumulator
    return acc + current;
  } else {
    // Otherwise, just return the accumulator unchanged
    return acc;
  }
}, 0);

// Display the total sum of even numbers
console.log(totalSumOfEven);
