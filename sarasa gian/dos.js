/* Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, 
los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.

*/

function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let materias;
  let nota;
  let edad;
  //punto a)
  let mejorNombre;
  let mejorNota;
  let flagMejor = 1;
  // punto b)
  let nombreJovencita;
  let edadJovencita;
  let flagJ = 1;
  //punto c)
  let totalEstudiantes = 0;
  let contFisica = 0;
  let contQuimica = 0;
  let contSistemas = 0;
  let porcQuimica = 0;
  let porcFisica = 0;
  let porcSistemas = 0;
  // punto d)
  let maxMaterias = 0;
  let edadMaxMaterias;
  let nombreMaxMaterias;
  let flagMax = 1;
  
  
  for(i = 0; i < 5; i++){
    nombre = prompt("Ingrese el nombre : ");
    carrera = prompt("Ingrese la carrera (Quimica ; Fisica ; Sistemas) :");
    while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
      carrera = prompt("Error. Ingrese la carrera (Quimica ; Fisica ; Sistemas) :");
    }
    sexo = prompt("Ingrese el sexo (masculino / femenino / no-binario) : ");
    while(sexo != "masculino" && sexo!= "femenino" && sexo != "no-binario"){
      sexo = prompt("Error. Ingrese el sexo (masculino / femenino / no-binario) : ");
    }
    materias = parseInt(prompt("Ingrese la cantidad de materias que cursa (1 a 5) : "));
    while(materias < 1 || materias > 5){
      materias = parseInt(prompt("Error. Ingrese la cantidad de materias (1 a 5) : "));  
    }
    nota = parseInt(prompt("Ingrese el promedio de notas (0 a 10)"));
    while(nota < 0 || nota > 10){
      nota = parseInt(prompt("Error. Ingrese el promedio de notas (0 a 10)"));
    }
    edad = parseInt(prompt("Ingrese la edad : "));
    while(isNaN(edad)){
      edad = parseInt(prompt("Error. Ingrese la edad : "));
    }
    // a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    if(flagMejor || (nota > mejorNota)){
      mejorNota = nota;
      mejorNombre = nombre;
      flagMejor = 0;
    } 
    //b) El nombre de la alumna mas joven.
    if(flagJ || (edad < edadJovencita)){
      nombreJovencita = nombre;
      edadJovencita = edad;
      flagJ = 0;
    }
    // c) Porcentaje de estudiantes que estudia cada carrera.
    if(carrera == "fisica"){
      contFisica++;
    } else if (carrera == "quimica"){
      contQuimica++;
    } else {
      contSistemas++;
    }
    totalEstudiantes++;
    //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
    if(carrera != "quimica" && (flagMax || maxMaterias < materias)){
      maxMaterias = materias;
      edadMaxMaterias = edad;
      nombreMaxMaterias = nombre;
      flagMax = 0;
    }
  }
  
  //c) Porcentaje de estudiantes que estudia cada carrera.
  if(contFisica != 0){
    porcFisica = contFisica * 100 / totalEstudiantes;
  }
  if(contQuimica != 0){
    porcQuimica = contQuimica * 100 /totalEstudiantes;
  }
  if(contSistemas != 0){
    porcSistemas = contSistemas * 100 / totalEstudiantes;
  }
  /*a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
 alert("\n El nombre del mejor promedio de Fisica es : " + mejorNombre + 
 "\n El nombre de la alumna mas joven es : " + nombreJovencita +
 "\n El porcentaje de estudiantes que estudia Fisica es : " + porcFisica +
 "\n El porcentaje de estudiantes que estudia Quimica es : " + porcQuimica +
 "\n El porcentaje de estudiantes que estudia Sistemas es : " + porcSistemas +
 "\n La edad del estudiante que cursa mas materias (sin contar quimica) es : " + maxMaterias +
 "\n El nombre del estudiante que cursa mas materias (sin contar quimica) es : " + nombreMaxMaterias);
 
    
}
