function factorialBreak(n) {
  let result = 1;
  let i = 1;
  while (true) {
    result *= i;
    i++;
    if (i > n) {
      break;
    }
  }
  return result;
}

console.log(factorialBreak(10)); // Output: 3628800