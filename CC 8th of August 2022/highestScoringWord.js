/* 6KYU Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(s) {
  // Get the original string
  // First split it by the spacing
  // Second map over it and use the spread operator to create an array that stores of array characters
  // Use reduce to attach a get the numerical values of all characters based on their alphabet place
  let as = s
    .split(" ")
    .map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  // At this point the as variable is an array with the numerical values of each string
  return s.split(" ")[as.indexOf(Math.max(...as))]; // Match the string with the highest numerical values (stored in the as variable) and return the string that matches that index
}
