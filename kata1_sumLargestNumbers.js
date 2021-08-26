// Kata 1 - Sum The Largest Numbers //

/*
    - create a sumLargestNumbers(); func that takes in arrays with two+ integers, identifies the largest two and sums them together
    - the function must return the sum of the two integers
    - you cannot use built-in JS helper funcs like sort/map/filter
    - NOTE: SPECIAL INSTRUCTIONS FOR SUBMISSION!!
*/

const arr = [1, 7, 2, 13]; // 7+13=20

const sumLargestNumbers = (data) => {
  for (let i = 0; i < data.length; i++) {
    // inner iteration
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        //initialise a container
        let temp = data[j];
        // switch out element at [j] into temp container
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  // return array
  return data;
};

console.log(sumLargestNumbers([1, 3, 12, 4]));

console.log(sumLargestNumbers(arr));

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
