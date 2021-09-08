// Kata 8 - Repeating Numbers //

/*
    - create a func repeatNumbers(data); which takes in a nested array with two elements
    - the first index will be a num, and the second index will be the number of times the previous element will be repeated
    - must return a STRING
    - e.g., [[1, 3]] // 111 and [[1, 3], [2, 4]] // 111, 2222

*/
const repeatNumbers = function (data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length - 1; j++) {
      // extract first index number and make into string
      let numStr = data[i][0].toString();
      // extract second index number and pass into .repeat() as # of repeats
      let repeatingNums = numStr.repeat(data[i][1]);
      // push into arr so join() can be used on it
      arr.push(' ' + repeatingNums);
      arr.join();
    }
  }
  return arr.toString();
};

console.log(repeatNumbers([[1, 10]])); // 1111111111

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); // 11, 222
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); // 10101010, 343434343434, 9292
