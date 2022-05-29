/* 8KYU No Zeros For Heroes

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway




*/

function noBoringZeros(n) {
    // Run a loop that ensures that our number still has a zero at the end while making sure that itself is not zero   
    while (n % 10 === 0 && n !== 0) {
    // As long as our condition from above holds keep removing zeros from the end until the condition is no longer satisfied
      n = n / 10
    }
    // Return the number itself
    return n
  }