/* 8KYU Enumerable Magic #20 - Cascading Subsets

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.

*/

function eachCons(array, n) {
  
    let mainArray = []
    if (n === 1) {
      array.forEach(item => mainArray.push([item]))
    } else {
      for (let i = 1; i < array.length; i++) {
      let nestedArray = []
      for (let j = -1; j < n - 1; j++) {
        nestedArray.push(array[i+j])
      }
      if (!nestedArray.includes(undefined)) {
          mainArray.push(nestedArray)
  
      }
    }
    }
      
    return mainArray
}