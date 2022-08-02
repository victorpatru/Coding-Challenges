/* 6KYU Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

const uniqueInOrder = iterable => {
  // Create a function to filter out duplicates while keeping order intact
  const reducer = item =>
    item.reduce((acc, val) => {
      if (acc.slice(-1) != val) {
        acc += val;
      }

      return acc;
    }, []);

  // Return the value based on the type of our data
  // If it is a string we need to split it and apply our reducer helper function
  // If it is an array of characters we need to pass in the data into our reducer
  // If it is an integer array we pass it to the reducer and change the data type of our value using the urnary operator
  return typeof iterable === "string"
    ? [...reducer(iterable.split(""))]
    : typeof iterable[0] === "string"
    ? [...reducer(iterable)]
    : [...reducer(iterable)].map(item => +item);
};
