// Kata 6 - SmartParking //

/* 
    - create whereCanIPark(); that returns coordinates of available parking spot, or returns false if there is none available
    - func recieves an array of arrays representing parking spots, and a string with a type of vehicle that is looking for a spot to park
    - there are three types of vehicles:
        1. regular --> can only park in R spots
        2. small --> can park in R and S spots
        3. motorcycles --> can park in R, S, or M spots
    - in the array of parking spots, upper case letter = available; and lowercase letter means unavailable
    - func must return array with coordinates of the sport as an [X, Y] pair. 

    - there may be multiple spots available for the vehicle type; which location does not matter. What matters is that the spot chosen is available for that vehicle type
    - no spots must return false

*/
// const whereCanIPark = function (spots, vehicle) {
//   const indices = [];
//   const el = [];
//   let index = spots.indexOf(el[0]);
//   if (vehicle === 'regular') {
//     el.push('R');
//   } else if (vehicle === 'small') {
//     el.push('R', 'S');
//   } else {
//     el.push('R', 'S', 'M');
//   }
//   while (index != -1) {
//     indices.push(index);
//     index = spots.indexOf(el[0], index + 1);
//   }
//   console.log(indices);
// };

// console.log(
//   whereCanIPark(
//     [
//       // COLUMNS ARE X
//       // 0    1    2    3    4    5
//       ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
//       ['s', 'M', 's', 'S', 'r', 'M'], // 1
//       ['s', 'M', 's', 'S', 'r', 'm'], // 2
//       ['S', 'r', 's', 'm', 'r', 'M'], // 3
//       ['S', 'r', 's', 'm', 'r', 'M'], // 4
//       ['S', 'r', 'S', 'M', 'M', 'S'], // 5
//     ],
//     'regular'
//   )
// ); //[4, 0]

const whereCanIPark = function (spots, vehicle) {
  let spotType = [];

  // section for filtering what spots to look for

  // create array of vehicle elements to search the input
  // spots array against; worry about coordinates later

  const vehicleType = (vehicle) => {
    // reset value of spotType arr
    spotType = [];
    return vehicle === 'regular'
      ? spotType.push('R')
      : vehicle === 'small'
      ? spotType.push('R', 'S')
      : spotType.push('R', 'S', 'M');
  };
  // call vehicleType to set the spotType array
  vehicleType(vehicle);

  //   console.log(vehicleType('small'));
  console.log(spotType);
  //-----------------------------------//

  // now search spots array against spotType; if it returns
  // True, then log the co-ordinates

  //   const isFound = (spots, spotType) => {
  //     // return true if spotType el is inside spots
  //     if (spotType.some((type) => spots.includes(type))) {
  //       //
  //       console.log('it worked');
  //     }
  //   };

  // section for finding specific spots //
  // loop over entire array
  for (let i = 0; i < spots.length; i++) {
    // loop over subarray elements
    // console.log('Rows of park spots are Row#: ' + [i] + '--' + spots[i]);
    for (let j = 0; j < spots[i].length; j++) {
      //
      //   console.log(
      //     'Column for each spot is Column#: ' + [j] + '--' + spots[i][j]
      //   );

      if (spots[i][j] === spotType[0]) {
        console.log('spot found!!!!');
      } else if (spots[i][j] === spotType[1]) {
        console.log('spot found!!!!');
      } else if (spots[i][j] === spotType[2]) {
        console.log('spot found!!!!');
      } else {
        return false;
      }
    }
  }
};

console.log(
  whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M'],
    ],
    'small'
  )
); //false
/*

*/
console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S'],
    ],
    'motorcycle'
  )
); //[3,1]
