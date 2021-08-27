// Kata 4 - Instructors Names //

/*
    - given a list of instructor names, create a function that returns the longest name
    - function takes in an array of objects as a parameter: instructorWithLongestName(instructors);
    - it must return the name as an object
    - if there are 2 equivalent length names, return the first one
*/
const instructorWithLongestName = function (instructors) {
  let count = 0;
  let obj;
  // outter loop
  for (let i = 0; i < instructors.length; i++) {
    // console.log(instructors[i].name);
    if (instructors[i].name.length > count) {
      count = instructors[i].name.length;
      obj = instructors[i];
    }
  }
  //   console.log(count);
  //   console.log(obj);
  return obj;
};

// test cases
console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
// {name: "Jeremiah", course: "Web"}

//
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);

// {name: "Domascus", course: "Web"}
