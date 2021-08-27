// Kata 4 - Instructors Names //

/*
    - given a list of instructor names, create a function that returns the longest name
    - function takes in an array of objects as a parameter: instructorWithLongestName(instructors);
    - it must return the name as an object
    - if there are 2 equivalent length names, return the first one
*/
const instructorWithLongestName = function (instructors) {
  // Put your solution here
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);

// test
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);

// output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}
