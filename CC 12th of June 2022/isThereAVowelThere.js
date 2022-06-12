/* 8KYU Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.


*/

function isVow(a){
    let asciiObj = {
      'a': 97,
      'e': 101,
      'i': 105,
      'o': 111,
      'u': 117
    }
    // Map over the given array
    return a.map(item => {
      // Iterate over our ASCII Object
      for (const property in asciiObj) {
        // Match the given array item with the corresponding object property (our vowels)
        if (item === asciiObj[property]) {
          item = property
        }
        
      }
      // Make sure to return the item (if we don't have this we get an array of the same length filled with only undefined values)
      return item
    })
      
}