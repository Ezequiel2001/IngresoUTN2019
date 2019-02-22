function Mostrar() {

    var clave = prompt("ingrese el número clave.");
    //while (clave != "utn750") 
    while (!(clave == "utn750")) {
        clave = prompt("Clave incorrecta.Reingrese el número clave.");
    }
    alert("La clave es la correcta.");

}//FIN DE LA FUNCIÓN
