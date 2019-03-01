//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var mayor;
    var menor;
    var ventas;
    var flag = 0;

    for (var i = 1; i <= 7; i++) {
        ventas = parseInt(prompt("Ingrese el valor de las ventas dia " + i));
        while (ventas <= 0 || isNaN(ventas)) {
            ventas = parseInt(prompt("Error.Ingrese nuevos valores."));
        }
        if (ventas > mayor || flag == 0) {
            mayor = ventas;
        }
        if (ventas < menor || flag == 0) {
            menor = ventas;
            flag = 1;
        }
    }
    alert("El mayor importe de la semana fue: " + mayor);
    alert("El menor importe de la semana fue: " + menor);
}

