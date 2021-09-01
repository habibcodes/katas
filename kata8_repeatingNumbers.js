// Kata 8 - Repeating Numbers //

/*
    - create a func repeatNumbers(data); which takes in a nested array with two elements
    - the first index will be a num, and the second index will be the number of times the previous element will be repeated
    - must return a STRING
    - e.g., [[1, 3]] // 111 and [[1, 3], [2, 4]] // 111, 2222

*/
const repeatNumbers = function (data) {
  // create 2d arr loop
  // the inner loop should print the arr[i][0] digit arr[i][1] times
  // return template literal string?
  let num;
  let repeat;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length - 1; j++) {
      // extract int from first index of arr and save it to var
      // change the int to a string using toString(); save it to var
      num = data[i][j].toString();
      // extract int at second index of arr and save it to var
      // return var1.repeat(var2) times

      //   console.log(num);
      //   console.log(typeof num);

      repeat = num.repeat(data[i][1]);

      //   repeat = data[i][1];
      //   console.log(repeat);

      //   repeated = num.repeat(10);

      //   console.log(repeated);
      return repeat;
    }
  }
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
