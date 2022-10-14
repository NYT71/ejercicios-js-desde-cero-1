let intentos = 3;
let contraseña;
let nombreUsario = "";
let titulo;
let rol = prompt("ingrese su rol");{
    if(rol != "admin" && rol != "recursos"){
        window.location.href = ("index2.html");
    }
}
if(rol == "admin" || rol == "recursos"){
    contraseña = parseInt(prompt("ingrese su contraseña"));
    if(contraseña == 1234){
        nombreUsario = prompt("ingrese su nombre de usuario");
        titulo = document.getElementById("titulo");
        titulo.innerText = ("Hola " + nombreUsario + ", bienvenido a nuestra aplicacion.");
    }else if(contraseña != 1234){
        window.location.href = ("index2.html");
    }
}