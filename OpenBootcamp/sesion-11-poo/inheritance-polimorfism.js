// Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nom, edad) {
        this._nombre = nom
        this._edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

class Desarollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarollador("Alexandre", 34, "JavaScript")
const nuevodev2 = new Desarollador("Paulo", 24, "PHP")

console.log(nuevodev)
nuevodev.saludo()
console.log(nuevodev2)
nuevodev2.saludo()

// Polimorfismo (muchas formas)