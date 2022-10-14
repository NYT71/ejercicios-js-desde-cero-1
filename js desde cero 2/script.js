let fecha = new Date();
fecha = fecha.getDay();

switch(fecha){
    case 0:
        alert("es domingo");
        break;
    case 1:
        alert("es lunes");
        break;
    case 2:
        alert("es martes");
        break;
    case 3:
        alert("es miercoles");
        break;
    case 4:
        alert("es jueves");
        break;
    case 5:
        alert("es viernes");
        break;
    case 6:
        alert("es sabado");
        break;
}