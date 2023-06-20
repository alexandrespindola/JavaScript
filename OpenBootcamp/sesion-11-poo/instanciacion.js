class Persona {
    // Private -> #
    #nombre
    #edad

    // Protected -> _
    _isDeveloper = true
    constructor(nom, ed) {
        this.#nombre = nom
        this.#edad = ed
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`)
    }

    obtenNombre() { // Função getter
        return this.#nombre
    }

    getEdad() { // Função getter
        return this.#edad
    }

    setEdad(nuevaedad) { // Função setter
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Gorka", 70)
// console.log(persona)
// console.log(persona.nombre)
persona.saludo()
console.log(persona)
console.log(persona.obtenNombre())

persona.nombre = "Alexandre"
console.log(persona.obtenNombre())
//console.log(persona.obtenEdad())
//console.log(persona._isDeveloper)

// Getter
const edad = persona.getEdad()
console.log(edad)

// Setter
persona.setEdad(11)
console.log(persona.getEdad())

console.log(persona.obtenNombre())