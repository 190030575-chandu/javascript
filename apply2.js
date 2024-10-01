const person1 = {
  fullName: function(city, country) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
  }
};

const person2 = {
  firstName: 'John',
  lastName: 'Doe'
};

// Using apply() to borrow person1's method for person2
person1.fullName.apply(person2, ['New York', 'USA']);  // Outputs: John Doe from New York, USA
