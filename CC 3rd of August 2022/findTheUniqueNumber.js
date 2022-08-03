/* 6KYU Find the unique number


There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
  // do magic
  // Create a reducer object that allows us to know which item is unique and which aren't
  let reducer = arr.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 0;
    }
    acc[val]++;
    return acc;
  }, {});

  // Iterate over that object and find the key of the unique item
  for (const key in reducer) {
    if (reducer[key] === 1) {
      return +key;
    }
  }
}
