/* 7KYU Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
  const uniqueObj = numbers.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 0;
    }
    acc[val] += 1;

    return acc;
  }, {});

  for (const key in uniqueObj) {
    if (uniqueObj[key] === 1) {
      return +key;
    }
  }
}
