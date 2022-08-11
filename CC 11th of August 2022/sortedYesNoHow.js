/* 7KYU Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function isSortedAndHow(array) {
  const sortedArray = [...array];
  if (
    arrayEquals(
      sortedArray.sort((a, b) => a - b),
      array
    )
  ) {
    console.log(
      sortedArray.sort((a, b) => a - b),
      array
    );
    return "yes, ascending";
  } else if (
    arrayEquals(
      sortedArray.sort((a, b) => b - a),
      array
    )
  ) {
    return "yes, descending";
  } else {
    return "no";
  }
}
