/* 6KYU Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(A) {
    // Store our unique entries in an object
    // Format: { unique_entry: count_of_entry }
    const uniqueEntriesCount = A.reduce((acc, val) => {
      if (!(val in acc)) {
        acc[val] = 1
      } else {
        acc[val] += 1
      }
  
      return acc
  
    }, {})
    
    // Iterate over the newly created object to get the key that has an odd number of values (our count)
    for (const value in uniqueEntriesCount) {
      if (uniqueEntriesCount[value] % 2 === 1) {
        return +value
      }
    }
  }