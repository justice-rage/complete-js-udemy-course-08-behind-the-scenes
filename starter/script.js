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