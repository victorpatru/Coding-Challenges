/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// Using Regex
function isAnagramRegex(stringA, stringB) {
  // Code goes here
  const sanitizedString = function (str) {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return sanitizedString(stringA) === sanitizedString(stringB);
}

// Using Reducers
function isAnagramReducer(stringA, stringB) {
  // Create a object (key/value) pair of each of the two strings

  const reducedString = (string) => {
    return string.split("").reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 1;
      }
      acc[val]++;

      return acc;
    }, {});
  };
  const reducedStringA = reducedString(stringA);
  const reducedStringB = reducedString(stringB);

  // Make sure that the keys in A are also present in B
  // Make sure that if the keys do exist they also match in their values
  for (let key in reducedStringA) {
    if (reducedStringA[key] !== reducedStringB[key] || !reducedStringB[key]) {
      return false;
    }
  }
  return true;
}
