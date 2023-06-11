const miFunction = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false
    throw new Error("El valor debe ser de tipo número")
}

//const elDoble = console.log(miFunction("ala"))
const numero = "8"

try {
    console.log("Está se executando de maneira correta")
    const doble = miFunction(numero)
    console.log(doble)
} catch(e) {
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Isto vai ser executado se tiver erro ou se não tiver erro.")
}

// InternalError, SyntaxError, TypeError, RangeError, ReferenceError