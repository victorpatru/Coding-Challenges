/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// Basic split join checker
// function palindromeChecker(text) {
//   // Code goes here
//   return text.toLowerCase().split("").reverse().join("") === text.toLowerCase();
// }

// For ... loop variant
function palindromeChecker(text) {
  // Code goes here
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
