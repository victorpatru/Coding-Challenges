/* 8KYU Regexp Basics - is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

*/

String.prototype.digit = function() {
    // Make sure we have only one item
    // Make sure it's between 0 and 9
    return (this.length === 1) && (this[0] >= '0') && (this[0] <= '9');
};