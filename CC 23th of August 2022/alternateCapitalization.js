/* 7KYU Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

*/

function capitalize(s) {
  return [
    s
      .split("")
      .map((letter, index) => (index % 2 === 0 ? letter.toUpperCase() : letter))
      .join(""),
    s
      .split("")
      .map((letter, index) => (index % 2 === 1 ? letter.toUpperCase() : letter))
      .join(""),
  ];
}
