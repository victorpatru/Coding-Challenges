/* 8KYU Sum of Multiples

Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/

function sumMul(n,m){
    // First ensure that the input we get is validated
 
    // Create an array that goes from n to m and includes multiples of n below m (captured by the Array.from() expression)

    // .reduce to ensure that we add together the value of the array and that we return a SINGLE value
      
    return n <= 0 || m <= 0 ? "INVALID" : Array.from({length: Math.ceil((m-n) / n)}, (_,i) => n * (i + 1)).reduce((acc, val) => acc + val, 0)
      
}