//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var lado;
    var triangulo;
    lado = parseInt(document.getElementById("lado").value);
    triangulo = lado * 3;

    alert("el perimetro es: " + triangulo);



}

