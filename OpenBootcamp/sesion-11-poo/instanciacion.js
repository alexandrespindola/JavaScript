class Persona {
    // Private -> #
    #nombre
    #edad
    #obtenEdad

    // Protected -> _
    _isDeveloper = true
    constructor(nom, ed) {
        this.#nombre = nom
        this.#edad = ed
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`)
    }

    obtenNombre() {
        return this.#nombre
    }

    obtenEdad() {
        return this.#edad
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
console.log(persona.obtenEdad())
console.log(persona._isDeveloper)