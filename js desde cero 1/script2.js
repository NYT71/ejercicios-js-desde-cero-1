// El Test B NO depende de las
//operaciones del Test A.

var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";



/*Test A

frase = palabra1 + " mundo";

resultado test A = palabra1 = hola   palabra2 = chau   frase = hola mundo
*/


/*Test B

palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";

resultado test B = palabra1 = chau   palabra2 = chau   frase = frase nueva
*/

/*Test C

palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;

resultado test C = palabra1 = hola chau   palabra2 = chau chau  frase = chau chau y chau chau
*/

/*Test D

palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";

resultado test B =   palabra1 = 1+1   palabra2 = 2/0   frase = 1+1=2
*/

console.log(palabra1);
console.log(palabra2);
console.log(frase);