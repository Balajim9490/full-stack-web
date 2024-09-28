let calculator = {
    num1: 200,
    num2: 560,
    add: function() {
      return this.num1 + this.num2;
    },
    subtract: function() {
      return this.num1 - this.num2;
    },
    multiply: function() {
      return this.num1 * this.num2;
    },
    divide: function() {
      if (this.num2 !== 0) {
        return this.num1 / this.num2;
      } else {
        return "Error: Division by zero";
      }
    }
  };
  console.log("Addition:", calculator.add());
  console.log("Subtraction:", calculator.subtract());
  console.log("Multiplication:", calculator.multiply());
  console.log("Division:", calculator.divide());