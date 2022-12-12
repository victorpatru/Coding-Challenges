/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  // Code goes here
  return text.split(" ").length >= 2
    ? text
        .toLowerCase()
        .split(" ")
        .map((item) => (item = item.charAt(0).toUpperCase() + item.slice(1)))
        .join(" ")
    : text;
}
