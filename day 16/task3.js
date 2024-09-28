let student = {
    name: "Sameer",
    age: 26,
    address: {
      street: "123 road 1 ",
      city: "hyderabad",
      state: "TG"
    },
    courses: {
      Math: 85,
      English: 90,
      Science: 78
    }
  };
   console.log("City:", student.address.city);
  console.log("State:", student.address.state);
  
  console.log("Math grade:", student.courses["Math"]);