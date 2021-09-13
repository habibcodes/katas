// Kata 10 - Multiplication Table //

/*
    - create the func multiplicationTable(maxValue); which takes a single parameter and generates a multiplication table for values from 1 to the provided number

*/

const multiplicationTable = function (maxValue) {
  // Your code here
  // multiply every number in range maxValue

  for (let i = 1; i <= maxValue; i++) {
    // console.log('outer loop: ' + i);
    for (let j = 1; j <= maxValue; j++) {
      // console.log('inner loop: ' + j);
      console.log(i * j);
    }
  }
};

// console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));
