function Mostrar() {

    var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
    //mientas el numero no sea mayor o igual a 0 y el numero no sea mayor o igual a 10 entrar al while
    while (!(numero >= 0 && numero <= 10)) {

        numero = parseInt(prompt("Numero incorreto.Reingrese un número entre 0 y 10."));
    }
    //alert("Numero correcto");
    document.getElementById("Numero").value = ("El numero " + numero + " es correcto ");
}
//FIN DE LA FUNCIÓN