const persona = {
    nombre: "Alexandre",
    edad: 34
}

console.log(persona)

function obtendDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtendDobleEdad(persona.edad)

console.log(dobleEdad)

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = persona.edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)