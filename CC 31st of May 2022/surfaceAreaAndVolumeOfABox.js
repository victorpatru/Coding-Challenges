/* 8KYU Surface Area and Volume of a Box

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

const getSize = (width, height, depth) => [ 2 * width * height + 2 * width * depth + 2 * height * depth , width * height * depth]
