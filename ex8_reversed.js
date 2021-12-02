//8. Enter a number. Reverse its first and last digits. Print the new number.

let number = 895796;
let reversed = number.toString().split('').reverse().join('');
console.log(reversed);
