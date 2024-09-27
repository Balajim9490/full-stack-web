function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
     let Array = fibonacci(n - 1);
      Array.push(Array[Array.length - 1] + Array[Array.length - 2]);
      return Array;
    }
  }
  console.log(fibonacci(10));

  //let fibArray = fibonacci(n - 1);
      //fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);