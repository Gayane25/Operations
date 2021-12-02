/*Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
ak-1 + ak-2)*/

function fibonacci(n) {
  let fiboArr = [0, 1];
  for (let i = 0; i <= n - 2; i++) {
    let newFibNum = fiboArr[i + 1] + fiboArr[i];
    fiboArr.push(newFibNum);
  }
  console.log(fiboArr[fiboArr.length - 1]);
}
fibonacci(10);
