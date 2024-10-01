const person1 = {
  name: 'Alice',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person2 = { name: 'Bob' };

person1.sayHello.call(person2); 
