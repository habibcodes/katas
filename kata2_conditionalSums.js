// Kata 2 - Conditional Sums //

/*
    - create conditionalSum(values, condition); that adds only numbers in an array which matches the given condition
    - there are two conditions:
        - odd --> sum all odd nums
        - even --> sum all even nums
        - edge case --> if no values match condition return 0
    - you cannot use JS array method .filter();

    tangent reading:
    - sorting algos: 
        - bubble --> quadratic = very slow
        - selection --> quadratic 
        - insertion --> 
        - quick --> best for avg cases**
        - merge -->

        https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort
*/

const conditionalSum = function (values, condition) {
  // initialise container outside loop
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === 'even' && values[i] % 2 === 0) {
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 !== 0) {
      sum += values[i];
    }
  }
  // return modifications **outside** loop, at end of func!
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even')); //6 //9
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
