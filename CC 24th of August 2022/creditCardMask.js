/* 7KYU Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/

// return masked string
function maskify(cc) {
  // Do not change the string if its less than 5
  if (cc.length < 5) return cc;

  // get the last four digits
  let visibleDigits = cc.slice(-4);
  // loop and add to the beginning until the the four digits and the original string are the same length
  while (visibleDigits.length < cc.length) {
    visibleDigits = `#${visibleDigits}`;
  }

  return visibleDigits;
}
