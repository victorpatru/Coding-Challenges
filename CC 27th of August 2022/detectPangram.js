/* 6KYU Detect Pangrams

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string) {
  // Create an object that holds each letter in the alphabet and initialize each one to 0
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, val) => {
    acc[val] = 0;
    return acc;
  }, {});

  // Here we run a loop through our given string adding each encounter of the letter to our alphabet object
  string
    .replace(/[^0-9a-z]/gi, "")
    .toLowerCase()
    .split("")
    .forEach(character => alphabet[character]++);

  // If our alphabet object has object values that are equal to zero it means that our given string is not a pangram and we return false; otherwise return true
  for (const key in alphabet) {
    if (alphabet[key] === 0) return false;
  }
  return true;
}
