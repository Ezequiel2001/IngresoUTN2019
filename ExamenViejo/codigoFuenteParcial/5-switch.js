//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var mesdelaño;
    mesdelaño = prompt("Ingrese un mes del año.").toLowerCase();
    switch (mesdelaño) {
        case "enero":
        case "febrero": alert("Verano!!!!");
            break;
        default: alert("Extraño enero y febrero.");
    }
}

