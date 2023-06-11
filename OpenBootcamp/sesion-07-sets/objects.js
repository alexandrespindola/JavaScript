const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: true,
    librosFavoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj)

const prop = "4-juegos"
const z = 1

console.log(obj[prop][z])

const obj2 = obj
console.log(obj2)

let val1 = 4
let val2 = val1

val2 = 6

console.log(val1)
console.log(val2)

const listaPeliculas = [
    { titulo: "E o vento leveou", anyo: 1939},
    { titulo: "Moana", anyo: 2016},
    { titulo: "Titanic", anyo: 1997}
]

console.log(listaPeliculas)

listaPeliculas.sort((a, b) => b.anyo - a.anyo)

console.log(listaPeliculas)

listaPeliculas.sort((a, b) => b.titulo - a.titulo)

console.log(listaPeliculas)