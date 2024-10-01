function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);  

console.log(multiplyByTwo(5));  
