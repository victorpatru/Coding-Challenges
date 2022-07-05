/* 8KYU Training JS #13: Number object and its properties


Task
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

*/

function whatNumberIsIt(n){
    //coding here
    switch(n) {
        case Infinity:
          return 'Input number is Number.POSITIVE_INFINITY';
          break;
        case 1.7976931348623157e+308:
          return 'Input number is Number.MAX_VALUE';
          break;
        case 5e-324:
          return 'Input number is Number.MIN_VALUE';
          break;
        case -Infinity:
          return 'Input number is Number.NEGATIVE_INFINITY';
          break;
        default:
          return isNaN(n) ? `Input number is Number.NaN` : `Input number is ${n}`;
          break;
    }
}