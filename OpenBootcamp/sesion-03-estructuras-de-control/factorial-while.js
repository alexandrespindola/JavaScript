function factorialWhile(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

console.log(factorialWhile(10)); // Output: 3628800