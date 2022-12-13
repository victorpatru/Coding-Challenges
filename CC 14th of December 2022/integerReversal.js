/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/

function reverseString(text) {
  return [...text].reduce((acc, val) => val + acc, "");
}

function reverseInteger(num) {
  let reversedInt = parseInt(reverseString(num.toString()));
  return reversedInt * Math.sign(num);
}
