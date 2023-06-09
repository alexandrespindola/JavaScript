const variable_interna = require('variable_interna');

const nom = "Gorka"

saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

//////

let nombre_2 = "Juan"

despedir(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Hola ${nombre}`)
}

/////

let persona = { nombre: "Juan", apellido: "González" }

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

///////

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)
}

imprimeNumero(45)

//////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 16)

console.log(s)

/////////

let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    return a * b
}

console.log(multiplicar(4, 9))