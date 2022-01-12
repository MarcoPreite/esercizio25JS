const person = {
  
  get fName() {
    return this.firstName;
  },

  get lName() {
    return this.lastName;
  },


  set fName(value) {
    this.firstName = value;
  },

  set lName(value) {
    this.lastName = value;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// const john = {
//   name: 'John',
//   surname: 'Doe',
//   fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// const simon = {
//   name: 'Simon',
//   surname: 'Collins',
//   fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

const john = Object.create(person);
john.fName = 'John';
john.lName = 'Doe';

const simon = Object.create(person);
simon.fName = 'Simon';
simon.lName = 'Collin';


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins