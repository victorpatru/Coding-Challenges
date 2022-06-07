/* 8KYU Simple validation of a username with regex

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

*/

// Note: the challenge was done without using regular expressions

function validateUsr(username) {
    // Check for valid length
    if (username.length < 4 || username.length > 16) return false
  
    // Check whether items are valid
    const validation = 'abcdefghijklmnopqrstuvwxyz_0123456789'.split('')
    const filteredArray = username.split('').filter(item => !validation.includes(item))
    if (filteredArray.length > 0) return false
  
    return true
    
}