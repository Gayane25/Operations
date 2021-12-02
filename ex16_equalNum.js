/*Given an array of numbers and a number. Find the index of a first element which is equal to that
number. If there is not such a number, that find the index of the first element which is the closest to it.*/

let arr = [5, 46, 17, -2, 89, 0, 26];
let num = 36;
if (arr.includes(num)) {
  let ind = arr.indexOf(num);
  console.log(ind);
} else {
  let closest = arr.reduce(function (prev, curr) {
    return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev; // added new method to find the closest number for num
  });
  console.log(closest);
}
