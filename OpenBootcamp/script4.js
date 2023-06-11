let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("No puedes sacar")
}

let nota = 5;

switch (nota) {
    case 5:
        console.log("Ok, 5");
        break;
    case 4:
        console.log("Ok, 4");
        break;
    default:
        console.log("Value")
}

if (5 === 5){
    console.log("Igual 5")
}


let a = 5;
console.log(typeof a)
let b = "5";

if (a == b) {
    console.log("as es igual a b string")
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];

console.log(lista[3]);

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 3)
}

for (let valor of lista) {
    console.log(valor)
}

lista.forEach(valor => {
    console.log(valor)
})

let persona = {
    nombre: "Alexandre",
    apellido: "Spindola",
    edad: 34,
    isDeveloper: true
}

let prop = "edad";
console.log(persona[prop]);

for (let propriedad in persona) {
    console.log(propriedad);
    console.log(persona[propriedad])
}

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++
}

j = 12
do {
    console.log(j);
    j++;
} while (j < max)