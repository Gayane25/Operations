//. 1. Enter a number. Find the difference between its biggest and smallest digits.

let number = 2453;

let numStr = number.toString().split('');
let maxVal = Math.max(...numStr);
let minVal = Math.min(...numStr);
console.log(maxVal - minVal);
