/* 8KYU Logical calculator 

Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).

*/

function logicalCalc(array, op){
    //your code here
    for (let i = 0; i < array.length; i++) {
      switch(op) {
          case "AND":
            return array.reduce((acc, val) => {
              let result = []
              if (acc === true && val === true) {
                result.push(true)
              } else {
                result.push(false)
              }
              
              return result[0]
            })
            break
          case "OR":
            return array.reduce((acc, val) => {
              let orResult = []
              if (acc === true || val === true) {
                orResult.push(true)
              } else if (acc === false || val === false) {
                orResult.push(false)
              } else {
                orResult.push(true)
              }
  
              return orResult[0]
            })
            break
          
          case "XOR":
            return array.reduce((acc, val) => {
              let xorResult = []
  
              if ((acc === true && val === true) || (acc === false && val === false)) {
                xorResult.push(false)
              } else {
                xorResult.push(true)
              }
  
              return xorResult[0]
            })
            break
      }
    }
}