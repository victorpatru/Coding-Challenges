/* 8KYU Parse Float

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

*/

function parseF(s) {
    return !isNaN(parseFloat(s)) ? parseFloat(s) : null
  }
  