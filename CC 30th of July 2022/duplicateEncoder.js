/* 6KYU Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

function duplicateEncode(word) {
  // Make the word case insensitive
  word = word.toLowerCase();
  // Create an new object with the word as the key and the number of occurrences as the value
  const duplicates = word.split("").reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 0;
    }

    acc[val]++;
    return acc;
  }, {});

  // Loop through the object and map over our parameter checking whether our word is a duplicate
  for (const key in duplicates) {
    return word
      .split("")
      .map(item => (duplicates[item] > 1 ? ")" : "("))
      .join("");
  }
}
