// Create an object named car with properties: make, model, year, and color
let car = {
    make: "Baleno",
    model: "Alpha",
    year: 2021,
    color: "Silver"
  };
  //1st type:
  // Print the original object to the console
  console.log("Original object:");
  console.log(car);
  //2nd type
  // Change the color property to a new value
  car.color = "Blue";
  //3rd type
  // Delete the year property
  delete car.year;
  //4th type
  // Print the modified object to the console
  console.log("Modified object:");
  console.log(car);