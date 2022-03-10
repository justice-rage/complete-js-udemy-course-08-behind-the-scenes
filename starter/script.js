'use strict';

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