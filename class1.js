class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak();  
myDog.bark();   
