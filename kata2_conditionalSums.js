// Kata 2 - Conditional Sums //

/*
    - create conditionalSum(values, condition); that adds only two numbers in an array which matches the given condition
    - there are two conditions:
        - odd --> sum all odd nums
        - even --> sum all even nums
        - edge case --> if no values match condition return 0
    - you cannot use JS array methods

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
  // Your code here
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
