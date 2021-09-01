// Kata 7 - In the Air Tonight //

/*
    - create func checkAir(samples, threshold); that takes two parameters
    - first param is an array of strings, each el representing air sample that is either 'clean' or 'dirty'
    - second param is a num that represents the upper limit of acceptable dirty samples
        - e.g., threshold of 0.4 means that < 40% of air samples can be dirty
    - func must return 'Polluted' or 'Clean' based on analyses of samples array

    - Solution pseudo code
        - count number of clean/dirty els and divide by arr.length
        - compare number against threshold 
        - chained ternary operators?
*/

const checkAir = function (samples, threshold) {
  // count arr.length; hold in var
  let dirty = 0;
  let clean = 0;
  // count total number of 'clean'/'dirty'; hold in clean/dirty quantity vars
  for (let sample of samples) {
    sample === 'dirty' ? (dirty += 1) : (clean += 1);
  }

  // if !cleanQuant/arr.length < threshold, log 'Clean', else, 'Polluted'
  return dirty / samples.length >= threshold ? 'Polluted' : 'Clean';
};

console.log(
  checkAir(
    [
      'clean',
      'clean',
      'dirty',
      'clean',
      'dirty',
      'clean',
      'clean',
      'dirty',
      'clean',
      'dirty',
    ],
    0.3
  )
); // Polluted

console.log(checkAir(['dirty', 'dirty', 'dirty', 'dirty', 'clean'], 0.25)); // Polluted

console.log(
  checkAir(['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'], 0.9)
); // Clean
