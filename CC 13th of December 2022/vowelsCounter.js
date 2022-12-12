/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = "aeiou".split("");

function vowelsCounter(text) {
  // Code goes here
  return text
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      if (vowels.includes(val)) {
        acc++;
      }

      return acc;
    }, 0);
}
