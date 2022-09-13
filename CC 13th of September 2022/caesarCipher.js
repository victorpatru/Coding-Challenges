/* Caesar Cipher FCC Javascript Algorithms and Data Structures

Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  // Get the Alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Creating our cipher object based on shifting values
  const cipher = alphabet.split("").reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = alphabet.indexOf(val) + 1;
    }
    return acc;
  }, {});
  for (const property in cipher) {
    if (cipher[property] <= 13) {
      cipher[property] += 13;
    } else {
      cipher[property] -= 13;
    }
  }

  return str
    .split("")
    .map((item) => getKeyByValue(cipher, alphabet.indexOf(item) + 1) || item)
    .join("");
  // Helper function for getting cipher key value based on matching object values
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
}
