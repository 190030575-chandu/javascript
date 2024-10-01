function sum(a, b, c) {
  console.log(a + b + c);
}

const numbers = [1, 2, 3];

// Using apply() to pass an array of arguments
sum.apply(null, numbers);  // Outputs: 6
