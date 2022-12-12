/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// For ... in Loop
// function maxRecurringChar(text) {
//   const entries = [...text].reduce((acc, val) => {
//     if (!acc[val]) acc[val] = 1;

//     acc[val]++;

//     return acc;
//   }, {});
//   let entryCounter = 0;
//   let highestEntry = "";
//   for (let key in entries) {
//     if (entries[key] > entryCounter) {
//       highestEntry = key;
//       entryCounter = entries[key];
//     }
//   }
//   return highestEntry;
// }

// IndexOf version
function maxRecurringChar(text) {
  let charArray = [];
  let valuesArray = [];
  const entries = [...text].reduce((acc, val) => {
    if (!acc[val]) acc[val] = 1;

    acc[val]++;

    return acc;
  }, {});
  charArray = Object.keys(entries);
  valuesArray = Object.values(entries);

  return charArray[valuesArray.indexOf(Math.max(...valuesArray))];
}
