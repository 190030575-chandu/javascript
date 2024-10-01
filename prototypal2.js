// Define a prototype object
const animal = {
  type: 'animal',
  sound() {
    console.log(`${this.type} makes a sound.`);
  }
};


const dog = Object.create(animal);
dog.type = 'dog';  
dog.bark = function() {
  console.log(`${this.type} barks!`);
};

cat.type = 'cat';  
cat.meow = function() {
  console.log(`${this.type} meows!`);
};

dog.sound();  
dog.bark();   

cat.sound();  
cat.meow();  
