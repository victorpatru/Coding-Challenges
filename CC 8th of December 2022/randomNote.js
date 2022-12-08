/* 383. Ransom Note

**********************Description**********************

Given two strings `ransomNote` and `magazine`, return `true` *if* `ransomNote` *can be constructed by using the letters from* `magazine` *and* `false` *otherwise*.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example 1:**

```
Input: ransomNote = "a", magazine = "b"
Output: false

```

**Example 2:**

```
Input: ransomNote = "aa", magazine = "ab"
Output: false

```

**Example 3:**

```
Input: ransomNote = "aa", magazine = "aab"
Output: true

```

**Constraints:**

- `1 <= ransomNote.length, magazine.length <= 105`
- `ransomNote` and `magazine` consist of lowercase English letters.

*/

function canConstruct(ransomNote, magazine) {
  // Helped function that that creates an object:
  // Unique values as keys
  // Occurrences as values
  // eg. 'aabbccc' => { a: 2, b: 2, c: 3 }

  function uniqueValues(str) {
    return str.split("").reduce((acc, val) => {
      if (!acc[val]) acc[val] = 0;

      acc[val]++;

      return acc;
    }, {});
  }

  // Use our helper function on the ransomNote and magazine strings
  const ransomNoteMap = uniqueValues(ransomNote);
  const magazineMap = uniqueValues(magazine);

  // Get the keys out of the magazineMap
  // eg. { a: 2, b: 2, c: 2, d: 3 } => ['a', 'b', 'c', 'd']
  const ransomNoteKeys = Object.keys(ransomNoteMap);

  // Loop over the ransomKeys array and get each value out
  // 1st check => is every key in ransom present in our magazineMap?
  // 2nd check => are there enough characters in magazine to cover the entire ransomNote?
  // If we either of these two checks fails, return false. Otherwise return true
  for (const key of ransomNoteKeys) {
    if (!magazineMap[key] || magazineMap[key] < ransomNoteMap[key])
      return false;
  }
  return true;
}
