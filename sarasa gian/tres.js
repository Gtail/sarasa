/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/






function mostrar() {
 
  let tipoJ;
  let origen;
  let precio;
  //punto a)
  let contMuñeca = 0;
  let contRompecabeza = 0;
  let contPelota = 0;
  let tipoMaxVendido;
  let flagMaxVendido = 1;
  // punto b)
  let promedioImportados = 0;
  let contImportados = 0;
  let acumTotal = 0;
  // punto c)
  let recaudacionTotal;
  // punto d)
  let menorValor;
  let precioRompe;
  let flagMenor;
  //punto e) 
  let iva;
let seguir;


  do{
    tipoJ = prompt("Ingrese tipo de juguete (muñeca/rompecabezas/pelota) : ");
    while (tipoJ != "muñeca" && tipoJ != "rompecabezas" && tipoJ != "pelota" ){
      tipoJ = prompt("Ingrese tipo de juguete (muñeca/rompecabezas/pelota) : ");
    }
    origen = prompt("Ingrese el origen del juguete (nacional o importado) : ");
    while (origen != "nacional" && origen != "importado"){
      origen = prompt("Ingrese el origen del juguete (nacional o importado) : ");
    }
    precio = prompt(parseInt("Ingrese el precio 1000 a 5000 pesos : "));
    while (precio < 1000 || precio > 5000){
      precio = prompt(parseInt("Error. Ingrese el precio 1000 a 5000 pesos : "));   
    }
    
    if(tipoJ == "muñeca" ){
      contMuñeca++;
    } else if (tipoJ == "pelota"){
      contPelota++;
    } else  {
      contRompecabeza++;
      precioRompe += precio
    }
    
    if(origen == "importado"){
      contImportados++;
    } acumTotal++;

    if(flagMenor || precioRompe > precio){
      precioRompe = precio;
      flagMenor = 0;
    }

  seguir = prompt("Quiere ingresar mas ventas? ")
  }while(seguir == "si");


}
