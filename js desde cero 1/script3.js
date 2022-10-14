/*
Realizar una ventana de usuario donde el mismo 
ingresará:
● edad
● nombre
● apellido
Estos datos se mostrarán en una alerta, en un 
texto complejo tal como:
‘El nombre del usuario es…
*/
let edad = parseInt(prompt("ingrese su edad"));
alert(`la edad del usuario es ${edad}`);
let nombre = prompt("ingrese su nombre");
alert(`el nombre del usuario es ${nombre}`);
let apellido = prompt("ingrese su apellido");
alert(`el apellido del usuario es ${apellido}`);

// ejercicio 2, mostrar con document.write

document.write(`el nombre del usuario es ${nombre} <br>`);
document.write(`la edad del usuario es ${edad}<br>`);
document.write(`el apellido del usuario es ${apellido}<br>`);


// ejercicio 3, pedir sueldo, bonus, sumarlos y mostrar el resultado

let sueldo = parseFloat(prompt("ingrese su sueldo"));
let bonus = parseFloat(prompt("ingrese su bono"));
let resultado = sueldo + bonus;

document.write("el resultado final de tu sueldo es : " + resultado);