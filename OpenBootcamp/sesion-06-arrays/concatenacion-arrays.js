const lista1 = ["a", "b", "c", false, null]
const lista2 = ["x", "y", "z", 8, 99, true, undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2)
lista3

console.log(...lista3)  

//Como obter uma lista a partir de outra .slice()

const array = ["oi", 1, 2, 3, true, null, "adeus"]
console.log(array.slice(0))