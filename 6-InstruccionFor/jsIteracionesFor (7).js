function Mostrar() {
    var numero;
    var cantidad = 0;
    numero = parseInt(prompt("Ingrese un numero."));
    while (numero < 0 || isNaN(numero)) {
        numero = parseInt(prompt("Error.Ingrese un numero mayor a 1"));
    }
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            cantidad++;
        }

    }
    console.log("Cantidad de divisores: " + cantidad);

}//FIN DE LA FUNCIÓN