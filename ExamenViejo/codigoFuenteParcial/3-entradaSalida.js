//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var largo;
    var ancho;
    var perimetro;
    var alambrado;
    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;
    perimetro = (largo + ancho) * 2;
    alambrado = perimetro * 6;
    alert("para un perimetro de " + perimetro + " se va a necesitar " + alambrado + " de alambre");

}

