/* 8KYU Bin to Decimal

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

// Use the parseInt method to extract the number from the whatever gets passed in the bin as an argument
// Use the second argument of parseInt to ensures we transform the base two of the binary into a number
const binToDec = bin => parseInt(bin, 2)