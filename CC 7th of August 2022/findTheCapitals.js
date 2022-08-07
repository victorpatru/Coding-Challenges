/* 7KYU Find the capitals

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

const capitals = word => {
  // Write your code here
  return word
    .split("")
    .map((item, i) => {
      if (item.toUpperCase() === item) {
        return i;
      }
    })
    .filter(item => item !== undefined);
};
