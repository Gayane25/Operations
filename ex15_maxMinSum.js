/*Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
of their lengths.*/

let arr = ['anymore', 'raven', 'me', 'communicate'];
let arrLength = [];
for (let i = 0; i < arr.length; i++) {
  arrLength.push(arr[i].length);
}
let max = Math.max(...arrLength);
let min = Math.min(...arrLength);
console.log(min + max);
