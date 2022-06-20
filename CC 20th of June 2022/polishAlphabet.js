/* 8KYU Polish alphabet

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/


function correctPolishLetters (string) {
    // your code
    return string.split('').map(item => {
      switch(item) {
          case 'ą':
            item = 'a'
            break
          case 'ć':
            item = 'c'
            break
          case 'ę':
            item = 'e'
            break
          case 'ł':
            item = 'l'
            break
          case 'ń':
            item = 'n'
            break
          case 'ó':
            item = 'o'
            break
          case 'ś':
            item = 's'
            break
          case 'ź':
          case 'ż':
            item = 'z'
            break
      }
      
      return item
    }).join('')
}
  