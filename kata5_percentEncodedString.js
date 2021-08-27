// Kata 5 - Percent Encoded String //

/*
    - create func that takes a string of words and turns it into a 'percent-encoded' string by replacing all whitespace with "%20"
    - encoding refers to using the values for special chars; here we focus only on the encoding value for whitespace (%20)
    - func urlEncode(text); takes in a string parameter and returns the string with the embedded whitespace encoding
        - e.g. "A string" ==> "A%20string"
    - only replace whitespace within the string, not the outside of the string
        - e.g. " A string " ==> "A%20string"

    - cannot use .replace();
*/

const urlEncode = function (text) {
  // trim any encapsulating whitespace
  let str = text.trim();
  // loop through and replace whitespae with encoding
  for (let i = 0; i < str.length; i++) {
    let replaced = str.split(' ').join('%20');
    return replaced;
  }
};

console.log(urlEncode('Lighthouse Labs'));
// Lighthouse%20Labs
console.log(urlEncode(' Lighthouse Labs '));
// Lighthouse%20Labs
console.log(urlEncode('blue is greener than purple for sure'));
// blue%20is%20greener%20than%20purple%20for%20sure
