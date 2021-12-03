//Given three numbers. Sort them by the ascending order.

let numbers = [-23, -456, 0];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);
