const person = {
  name: 'David',
  introduce: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const introducePerson = person.introduce.bind(person);  
introducePerson();  // 
