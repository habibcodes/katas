// Kata 9 - Case Maker //

/*
    - create a function called camelCase(input) that converts an input string into camelCase text
    - the input will be a string separated by whitespace

    - similar to 'percentEncoded' --> use trim()/split()/join()
*/
const camelCase = function (input) {
  return input.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
