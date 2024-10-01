function outerFunction() {
  let outerVariable = 'I am outside function';
  
  function innerFunction() {
    console.log(outerVariable);  // Inner function can access the outer function's variables
  }
  
  return innerFunction;
}

const closureExample = outerFunction();
closureExample();  // Outputs: 'I am outside!'
