/* 8KYU Stringy Strings

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/


const stringy = size => "10".repeat(size).slice(0,size);

// repeat method creates a lengthy pattern of "10" (eg. 101010101010)
// from that we slice from the first element until we hit the size of the actual string 
// eg. console.log('10'.repeat(4).slice(0, 4)) outputs 1010 (correct answer)
// while console.log('10'.repeat(4)) outputs 10101010 (invalid answer)
