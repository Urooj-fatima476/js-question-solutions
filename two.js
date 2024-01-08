// Sample array of objects with a "price" property
const products = [
    { name: 'Product A', price: 25.99 },
    { name: 'Product B', price: 15.49 },
    { name: 'Product C', price: 35.75 },
    { name: 'Product D', price: 10.99 }
  ];
  
  // Using sort to arrange the array in descending order based on the "price" property
  products.sort((a, b) => b.price - a.price);
  
  // Display the sorted array
  console.log(products);
  