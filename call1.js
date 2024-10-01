function introduce(greeting, age) {
  console.log(`${greeting}! My name is ${this.name}, and I am ${age} years old.`);
}

const person = { name: 'Charlie' };


introduce.call(person, 'Hello', 25);  
