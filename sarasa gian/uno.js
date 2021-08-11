/* Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada 
mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
*/



function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  //punto a)
  let acumEdadReptiles = 0;
  let contReptiles = 0;
  let promEdadReptiles = 0;
  // punto b)
  let tipoMasJoven;
  let sexoMasJoven;
  let edadJoven;
  let flagJoven = 1;
  // punto c)
  let porcAves = 0;
  let totalAnimales = 0;
  // punto d)
  let contMamiferos = 0;
  let contAves = 0;
  let mayorTipo;
  let respuesta;

  do{
    nombre = prompt("Ingrese el nombre (3 a 8 caracteres) : ");
    while(nombre.length < 3 || nombre.length > 8){
      nombre = prompt("Error. Ingrese el nombre nuevamente (3 a 8 caracteres) : ");
    }
    tipo = prompt("Ingrese el tipo de animal (mamifero/ reptil/ ave) : ");
    while(tipo != "mamifero" && tipo != "reptil" && tipo != "ave"){
      tipo = prompt("Error. Ingrese el tipo de animal (mamifero/ reptil/ ave) : ");
    }
  if (tipo == "reptil") {
    sangre = prompt("Ingrese el tipo de sangre (fria) : ");
    while (sangre != "fria") {
     sangre = prompt("Error. Los reptiles tienen sangre fria. Intente nuevamente : " );
    }
  } else {
    sangre = prompt("Ingrese tipo de sangre (fria / calida) : " );}
      while(sangre != "fria" && sangre != "calida"){
        sangre = prompt("Error. Ingrese el tipo de sangre nuevamente (fria / calida) : ");}
     edad = parseInt(prompt("Ingrese la edad (mayor a 0) : "));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Error. Ingrese la edad nuevamente : "));}
      sexo = prompt("Ingrese el sexo del animal ( “m” de macho o “h” de hembra ) : ");
      while(sexo != "m" && sexo != "h"){
    sexo = prompt("Error. Ingrese el sexo del animal nuevamente ( “m” de macho o “h” de hembra ) : ");}
   
    if(tipo == "reptil"){
      acumEdadReptiles += edad;
      contReptiles++;
    } else if (tipo == "ave"){
      contAves++;
    }else{
      contMamiferos++;
    }
    totalAnimales++;

    if(flagJoven || (edadJoven > edad) ){
      edadJoven = edad;
      tipoMasJoven =  tipo;
      sexoMasJoven = sexo;
      flagJoven = 0;
    }


    respuesta = prompt("Quiere ingresar mas datos? si/no")
  } while(respuesta == "si");

  promEdadReptiles = acumEdadReptiles/contReptiles;
  
  if(contAves != 0){
    porcAves = (contAves*100) / totalAnimales;
  }

  if (contReptiles > contMamiferos && contReptiles > contAves) {
    mayorTipo = contReptiles;
   } else if (contMamiferos > contReptiles && contMamiferos >= contAves) {
    mayorTipo = contMamiferos;
   } else {
   mayorTipo =  contAves;
   }
   /*a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
*/
   alert("\n El promedio de edad de los reptiles es " + promEdadReptiles +
   "\n El tipo de la mascota mas joven es " + tipoMasJoven + 
   "\n La edad de la mascota mas joven es " + edadJoven +
   "\n El porcentaje de aves es " + porcAves + 
   "\n El mayor tipo de cantidad de mascota es " + mayorTipo);

}
