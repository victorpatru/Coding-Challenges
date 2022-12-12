/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
  // Code goes here
  let result = 0;

  if (stringA.length !== stringB.length) {
    throw new Error("String do not have equal lengths");
  }

  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
      result++;
    }
  }

  return result;
}
