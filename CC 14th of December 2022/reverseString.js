/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Method Chaining
function reverseStringMethodChaining(text) {
  return [...text].reverse().join("");
}

// Recursive
function reverseStringRecursive(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.slice(1)) + text[0];
  }
}

// Classic for loop
function reverseStringForLoop(text) {
  let result = "";

  for (const char in text) {
    text = char + text;
  }

  return result;
}

// Reducer version
function reverseStringReduce(text) {
  return [...text].reduce((acc, val) => val + acc, "");
}
