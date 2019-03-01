//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var notas;
    var sexo;
    var promedio;
    var notabaja;
    var acumulador=0;
    var contadordevarones=0;
    var flag=0;
    var sexobajo;
    for (var i = 1; i <= 6; i++) {
        notas = parseInt(prompt("Ingrese la nota"));
        while (notas < 0 || notas > 10 || isNaN(notas)) {
            notas = parseInt(prompt("Ingrese unas notas entre 0 y 10. "));
        }
        sexo=prompt("Ingrese sexo").toLowerCase();
        while(sexo!="f"&& sexo!="m"){
               sexo=prompt("Ingrese sexo.(f/m)");
        }
              acumulador=acumulador + notas;
        if (notas < notabaja || flag==0) {
            notabaja=notas;
            sexobajo=sexo;
            flag=1;
        }
        if 

    }
 
}

