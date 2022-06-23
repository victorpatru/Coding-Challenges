/* 8KYU Training JS #12: loop statement --for..in and for..of

Task
Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)

*/

function giveMeFive(obj){
    //coding here
    let array = []
    for (let key in obj) {
      if (obj[key].length === 5 && key.length === 5) {
        array.push(key)
        array.push(obj[key])
      } else if (obj[key].length === 5) {
        array.push(obj[key])
      } else if (key.length === 5) {
        array.push(key)
      }
    }
  
    return array
  }