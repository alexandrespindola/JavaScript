const fecha = new Date()

console.log(fecha)

const fecha2 = new Date(1988, 10, 19, 09, 45, 15, 192)

console.log(fecha2)

const fecha3 = new Date(0)

console.log(fecha3)

const fecha4 = new Date("Octob, 1979 12:15:15")

console.log(fecha4)

console.log(fecha2.getMonth() + 1)

const local = "en-en"

console.log(fecha2.toLocaleDateString(local))