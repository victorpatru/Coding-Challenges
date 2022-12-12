/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// For ... loop
// function longestWord(text) {
//   // Code goes here
//   let index;
//   let longestRunningLength = 0;
//   text = text.split(" ");
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].length > longestRunningLength) {
//       index = i;
//       longestRunningLength = text[i].length;
//     }
//   }

//   return text[index];
// }

// Using .sort()

// function longestWord(text) {
//   // Code goes here
//   return text.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// Using Reduce
function longestWord(text) {
  // Code goes here
  return text.split(" ").reduce((acc, val) => {
    if (val.length > acc.length) {
      acc = val;
    }

    return acc;
  }, "");
}
