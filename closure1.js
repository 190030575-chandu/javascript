function createPerson(name) {
  let age = 0;  // Private variable

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    incrementAge: function() {
      age++;
    }
  };
}

const person = createPerson('John');
console.log(person.getName());  // Outputs: 'John'
console.log(person.getAge());   // Outputs: 0
person.incrementAge();
console.log(person.getAge());   // Outputs: 1
