/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
      var largo;
      var ancho;
      var resultado;
      var perimetro;

function Rectangulo () 
{
     largo=parseFloat(document.getElementById("Largo").value);
     ancho=parseFloat(document.getElementById("Ancho").value);
     resultado= 2 * largo + 2 * ancho ;
     perimetro= resultado * 3;
     alert("Cantidad de alambre por comprar " + perimetro);
}
function Circulo () 
{
   var radio;
   var alambre;
    radio=parseFloat(document.getElementById("Radio").value);
    resulado=(3.14*radio)*2;
    alambre=resultado * 3;
    alert("El radio del terreno es " + alambre);

}
function Materiales () 
{
    var cal;
    var cemento;
    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);
    resultado = 2 * largo + 2 * ancho;
    perimetro= resultado * 3;
    cal=perimetro * 3;
    cemento = perimetro * 2 ;
    alert("Para un terreno de " + perimetro + "m2 se necesitan "+ cal +"bolsas de cal y "+ cemento +"bolsas de cemento");
    
}