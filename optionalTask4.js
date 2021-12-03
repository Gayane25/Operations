/*Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1
)*/

function facto(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(number + '!' + '=' + result);
  return result;
}
facto(5);
