let employee = {
    name: "Balaji",
    position: "Software Engineer",
    department: "IT",
    salary: 80000
  };
  for (let key in employee) {
   // console.log(`${key}: ${employee[key]}`);
  }
  console.log( Object.keys(employee))
  console.log( Object.values(employee))