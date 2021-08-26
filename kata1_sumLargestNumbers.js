// Kata 1 - Sum The Largest Numbers //

/*
    - create a sumLargestNumbers(); func that takes in arrays with two+ integers, identifies the largest two and sums them together
    - the function must return the sum of the two integers
    - you cannot use built-in JS helper funcs like sort/map/filter
    - NOTE: SPECIAL INSTRUCTIONS FOR SUBMISSION!!
*/

const arr = [1, 7, 2, 13]; // 7+13=20
const arr2 = [1, 5, 2, 25]; // 25+5=30

const sumLargestNumbers = (data) => {
  const newArr = data.slice();
  for (let i = 0; i < newArr.length; i++) {
    // inner iteration
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] > newArr[j + 1]) {
        // //initialise a container
        // let temp = data[j];
        // // switch out element at [j] into temp container
        // data[j] = data[j + 1];
        // data[j + 1] = temp;
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
  }
  // console.log(data[data.length - 1]);
  // console.log(data[data.length - 2]);

  // return array
  return newArr[newArr.length - 1] + newArr[newArr.length - 2];
};

console.log(sumLargestNumbers(arr2)); //20 //30

console.log(sumLargestNumbers([1, 3, 12, 4])); //16

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
