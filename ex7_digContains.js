//. Insert a digit and a number. Check whether the digits contains in the number or not.

function check(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num2.includes(num1)) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
check(8, 45689);
