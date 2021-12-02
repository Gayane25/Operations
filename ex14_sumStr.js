/*Given an array of strings and numbers. Print the number of integers and the number of strings in the
array.*/

let arr = [1, 4, 'i am a string', '456'];
let numSum = 0;
let strSum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    numSum++;
  } else if (typeof arr[i] === 'string') {
    strSum++;
  } else {
    console.log('not a number, neither a string');
  }
}
console.log('Numbers :' + numSum + ',' + ' ' + 'String :' + strSum);
