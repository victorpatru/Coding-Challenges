/* 8KYU Find Multiples of a Number

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

*/

function findMultiples(integer, limit) {
    //your code here
    return Array.from({length: (limit - integer) / integer + 1}, (_,i) => integer * (i+1))
  }

// First we need a method that allows us to create a whole arrow using two number.
// For this reason we use the built-in method '.from'
// We know the length of the function depends on the inputted values which is why we create an array with the length that is the normalized value of the array
// Using that length we use the index of the array to create the multiplied array