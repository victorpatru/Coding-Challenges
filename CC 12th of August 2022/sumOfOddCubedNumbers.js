/* 7KYU Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function cubeOdd(arr) {
  if (arr.map(item => isNaN(item)).filter(Boolean)[0]) return undefined;
  return arr
    .map(item => Math.pow(item, 3))
    .filter(item => Math.abs(item) % 2 === 1)
    .reduce((acc, val) => acc + val, 0);
}
