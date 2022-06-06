/* 8KYU Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

*/

function lowercaseCount(str){
    //How many?
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return str.split('').reduce((accumulator, value) => {
      if (lowercase.includes(value)) accumulator += 1
      
      return accumulator
    }, 0)
}