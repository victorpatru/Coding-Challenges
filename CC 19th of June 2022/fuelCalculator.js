/* 8KYU Fuel Calculator

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents


*/

function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    let discount 
    switch(litres) {
        case 2:
        case 3:
          discount = 0.05
          break
        case 4:
        case 5:
          discount = 0.10
          break
        case 6:
        case 7:
          discount = 0.15
          break
        case 8:
        case 9:
          discount = 0.20
          break
        default:
          discount = 0.25
          break
    }
    let cost = litres * (pricePerLitre - discount)
    return +cost.toFixed(2)
  }