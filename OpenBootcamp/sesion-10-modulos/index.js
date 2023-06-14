// const moduloMatematicas = require("./modulos/matematicas.js")
// console.log(moduloMatematicas)

// const { factorial, suma } = moduloMatematicas;

// const factorial = moduloMatematicas.factorial;
// const suma = moduloMatematicas.suma;

// console.log(factorial(10))

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)