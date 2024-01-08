// Sample array of objects with "id" and "status" properties
const objectsArray = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'in-progress' },
    { id: 3, status: 'pending' },
    { id: 4, status: 'in-progress' }
  ];
  
  // Specify the ID of the object you want to update
  const targetId = 3;
  
  // Use the find method to locate the object with the specified ID
  const targetObject = objectsArray.find(obj => obj.id === targetId);
  
  // Check if the object with the specified ID was found
  if (targetObject) {
    // Update the "status" property to "completed"
    targetObject.status = 'completed';
  
    // Display the updated array of objects
    console.log(objectsArray);
  } else {
    console.log('Object with the specified ID not found.');
  }
  