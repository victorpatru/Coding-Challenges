/* 6KYU CamelCase Method

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)

*/

String.prototype.camelCase = function () {
  //your code here
  return this.split(" ")
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
};
