/*. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
the last digit of the inserted number is 0, number remains the same. */

let posInt = 367;
if (posInt % 10 === 0) {
  console.log(posInt);
} else {
  let newInt = (posInt % 10).toString();
  posInt = Math.floor(posInt / 10).toString();
  newInt += posInt;
  console.log(newInt);
}
