//Given a number. Print “odd” if the number is odd and “even” if it is even.

let array = [125, 35, 20];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i], 'is', 'even');
  } else {
    console.log(array[i], 'is', 'odd');
  }
}
