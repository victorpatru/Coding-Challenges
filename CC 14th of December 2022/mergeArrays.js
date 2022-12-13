/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Using Sets
function mergeArraysSet(...arrays) {
  return [...new Set([].concat(...arrays))];
}

function mergeArraysReduce(...arrays) {
  return [].concat(...arrays).reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }

    return acc;
  }, []);
}
