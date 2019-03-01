//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero;
    var numero2;
    var numerofinal;
    numero = parseInt(prompt("Ingrese un numero."));
    numero2 = parseInt(prompt("Ingrese un numero."));
    while (numero <= 0 || isNaN(numero)) {
        numero = parseInt(prompt("Ingrese otro numero."));

    }
    while (numero2 <= 0 || isNaN(numero2)) {
        numero2 = parseInt(prompt("Ingrese otro numero."));

    }
    if (numero == numero2) {
        numerofinal = numero * numero2;
        document.write(numerofinal);

    }
    else if (numero > numero2) {
        numerofinal = numero - numero2;
        document.write(numerofinal);
    }
    else {
        numerofinal = (numero + numero2);
        document.write(numerofinal);
    }
}


