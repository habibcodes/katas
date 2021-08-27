// Kata 3 - Vowels //

/*
    - create a func that counts the number of vowels in a given string 
    - vowels are: a, e, i, o, u
    - function numberOfVowels(data); takes one parameter
    
*/

//  loop through string
// filter using regex or .filter()?
// maybe use long if-statement with lots of ORs and have a counter +=1?

const numberOfVowels = function (data) {
  // initialise counter
  let counter = 0;
  // remove case
  let str = data.toLowerCase();

  // loop over data and count vowels
  for (let i = 0; i <= str.length; i++) {
    // console.log(data[i]);
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      counter += 1;
    }
  }
  return counter;
};

console.log(numberOfVowels('orange')); //3
console.log(numberOfVowels('lighthouse labs')); //5
console.log(numberOfVowels('aeiou')); //5

// edge case with capitalised vowels
console.log(numberOfVowels('AeIoU')); //5
