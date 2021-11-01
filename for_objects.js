const estudiante = {
    nombre: 'jose david',
    apellido: 'angarita pertuz',
    edad: 24
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];

for (const name in estudiante) {
    console.log(`llave: ${name}\n valor: ${estudiante[name]}`);
}
console.log("--------------------------");


for (const name2 of numeros) {
    console.log(`numero = ${name2}`);
}

console.log("el for in sirve mas que todo para objetos y el for of para listas que son iterables");