console.log("hello")

const array = [undefined, "", 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, "hola", "hola", {id: 5}, {id: 5}]

console.log({id: 5} === {id:5})

const miSet = new Set(array)

console.log(array)

console.log(miSet)

miSet.add(25)
miSet.add(30)

console.log(miSet)

miSet.delete("hola")

console.log(miSet)

//miSet.clear()

console.log(array.includes())

console.log(miSet.has(40))

console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[0])
