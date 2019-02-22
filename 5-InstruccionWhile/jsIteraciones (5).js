function Mostrar() {

    var sexo = prompt("ingrese f ó m .");
    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt("Reingrese f ó m .");
    }
    //alert(sexo);
    document.getElementById('Sexo').value = ("El sexo es " + sexo + " es correcto");
}//FIN DE LA FUNCIÓN