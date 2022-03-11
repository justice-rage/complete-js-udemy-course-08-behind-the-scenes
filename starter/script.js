'use strict';

// Lecture 93: Scope

/*
function calculateAge(birthYear) {
  const age = 2037 - birthYear;
  
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name as outer scope's variable
      const firstName = 'steven';

      // reassigning outer scope's variable
      output = 'new output'

      const string = `oh, and you're a millenial, ${firstName}`;
      console.log(string);

      function add(a, b) {
        return a + b;
      }

    }
    // console.log(string);
    console.log(millenial);
    // console.log(add(2,3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'justice'
calculateAge(1995);
// console.log(age);
// printAge();
*/

/////////////////////////////////////////

// Lecture 95: Hoisting and TDZ

/*
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'justice';
let job = 'teacher';
const year = 1995;

// functions
console.log(addDeclaration(2,3));
// console.log(addExpression(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));

function addDeclaration(a,b) {
  return a + b;
}

const addExpression = function(a,b) {
  return a + b;
}

var addArrow = (a,b) => a + b;

// Example

console.log(undefined);
if (!numProducts) deleteSoppingCart();

var numProducts = 10;

function deleteSoppingCart() {
  console.log(`All products deleted`)
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

////////////////////////////////////

// Lecture 97: The this keyword

// console.log(this);

// const calculateAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// }
// calculateAge(1995);

// const calculateAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// }
// calculateAgeArrow(1995);

// const justice = {
//   year: 1995,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// };
// justice.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = justice.calcAge;
// matilda.calcAge();

// const f = justice.calcAge;
// f();

///////////////////////////////

// Lecture 98: Regular Functions vs. Arrow Functions

/*
var firstName = 'Matilda';

const justice = {
  firstName: 'justice',
  year: 1995,
  calcAge: function() {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this; // self or that
    // const self = this; // self or that
    // const isMillenial = function() {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

justice.greet();
justice.calcAge();

// arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2,5);
addExpression(2,5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

////////////////////////////////////

// Lecture 100: Primitives vs. Objects (Primitives vs. Reference Types)

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('Me', me);

// primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(`before marriage:`, jessica);
console.log(`after marriage:`, marriedJessica);

// marriedJessica = {};

// copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log(`before marriage:`, jessica2);
console.log(`after marriage:`, jessicaCopy);