/* 6KYU Decipher This!

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

*/

function decipherThis(str) {
  //have fun!
  return str
    .split(" ")
    .map(item => {
      // Split the item into the numbers and characters
      const regex = new RegExp("([0-9]+)|([a-zA-Z]+)", "g");
      const splittedArray = item.match(regex);
      // Replace the numbers for their character code equivalent
      splittedArray[0] = String.fromCharCode(+splittedArray[0]);

      // Ensure that our character part exists
      if (splittedArray[1] === undefined) {
        return splittedArray.join("");
      }

      // If our character part has at least 2 chracters replace the first with the last
      if (splittedArray[1].length > 1 && splittedArray[1] !== undefined) {
        const firstChar = splittedArray[1].slice(0, 1);
        const lastChar = splittedArray[1].slice(-1);
        splittedArray[1] = lastChar + splittedArray[1].slice(1, -1) + firstChar;
      }

      // Return the new array formatted [character code equivalent][last character][middle characters][first character]
      return splittedArray.join("");
    })
    .join(" ");
}
