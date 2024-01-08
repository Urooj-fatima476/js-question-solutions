const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const flattenedArray = nestedArrays.flat(); // Flatten the structure
  const sumOfNumbers = flattenedArray.reduce((sum, num) => sum + num, 0); // Calculate the sum
  
  console.log(sumOfNumbers); // Output: 45
  const array = [1, 2, 3, 4, 5];
  const targetElement = 6;
  
  const foundElement = array.find(element => element === targetElement);
  
  if (foundElement !== undefined) {
    console.log(foundElement);
  } else {
    console.log("Element not found. Returning default object.");
    // You can return a default object or value here.
  }
  //. Map Method:
  //The map method in JavaScript is used to create a new array by applying a function to each element of an existing array. It does not mutate the original array but instead returns a new array with the results of applying the provided function to each element.
  //Example:
  const originalArray = [1, 2, 3, 4, 5];
  
  const squaredArray = originalArray.map(num => num ** 2);
  
  console.log(squaredArray); 