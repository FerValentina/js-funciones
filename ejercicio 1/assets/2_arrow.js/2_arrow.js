// ejercicio n°2

// let suma = function(a, b) {
//     return a + b
// }

let suma = (a, b) => a + b;



let a = Number(prompt("ingrese el valor de a:"));
let b = Number(prompt("ingrese el valor de b:"));
console.log(suma(a, b));
alert(` El resultado es: ` + suma(a, b));