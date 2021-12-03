//. Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let arr = [4, 7, -5];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
  if (arr[i] === 0) {
    console.log('unsigned');
    break;
  }
  if (count % 2 === 0 && i === arr.length - 1) {
    console.log('+');
  }
  if (count % 2 !== 0 && i === arr.length - 1) {
    console.log('-');
  }
}
