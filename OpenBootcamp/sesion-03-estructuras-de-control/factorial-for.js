function factorialFor(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
}

console.log(factorialFor(10)); // Output: 3628800