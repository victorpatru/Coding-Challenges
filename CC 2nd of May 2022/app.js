/* 8KYU A wolf in sheep's clothing 

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

 */

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
      return "Pls go away and stop eating my sheep"
    } else {
      let indexOfWolf = queue.reverse().indexOf("wolf")
      return `Oi! Sheep number ${indexOfWolf}! You are about to be eaten by a wolf!`
    }
}

/* 8KYU Grasshopper - Array Mean 

Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4 */


const findAverage = nums => nums.reduce( ( accumulator, value ) => accumulator + value, 0) / nums.length


/* 8KYU No Loops 2 - You only need one

*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case. */

const check = (a,x) => a.includes(x);

/* 8KYU Printing Array elements with Comma delimiters

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

const printArray = array => array.join();

/* 8KYU

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0


*/

function sumOfDifferences(arr) {
    let sortedArray = arr.sort((a,b) => b - a)
    let differences = []
    
    for (let i = 1; i < arr.length; i++) {
      differences.push(sortedArray[i - 1] - sortedArray[i])
    }
    
    return differences.reduce((accumulator,value) => accumulator + value, 0)
  }