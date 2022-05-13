/* 8KYU Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') === x.toLowerCase()