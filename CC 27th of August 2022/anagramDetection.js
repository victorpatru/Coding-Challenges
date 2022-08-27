/* 7KYU Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

// Helper function allowing us to check if two objects are equal (attn: wby value and not reference)
const haveSameData = (obj1, obj2) => {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};

const isAnagram = (test, original) => {
  // Using the test and original strings and create objects that have as the keys the letter and value the number of time it appears in the string

  const testObj = test
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 1;
      } else {
        acc[val]++;
      }
      return acc;
    }, {});

  const originalObj = original
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 1;
      } else {
        acc[val]++;
      }
      return acc;
    }, {});

  // Run our two objects through the helper function to decide whether our two strings are indeed anagrams
  return haveSameData(testObj, originalObj);
};
