function factorial(a) {
    if (a < 0) {
      return "Input must be a non-negative integer.";
    }
  
    // Create an array using a loop and use reduce to calculate the factorial
    const numbers = [];
    for (let i = 1; i <= a; i++) {
      numbers.push(i);
    }
  
    return numbers.reduce((acc, curr) => acc * curr, 1);
  }
  
  console.log(factorial(5));