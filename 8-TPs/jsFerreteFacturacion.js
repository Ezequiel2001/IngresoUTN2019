/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
 var Numero1;
 var Numero2;
 var Numero3;
 var Resultado;
function Sumar () 
{
  Numero1=parseInt(document.getElementById("PrecioUno").value);
  Numero2=parseInt(document.getElementById("PrecioDos").value);
  Numero3=parseInt(document.getElementById("PrecioTres").value);
    Resultado=Numero1+Numero2+Numero3;
    alert("El resultado de la suma es " + Resultado); 

}
function Promedio () 
{
    Numero1=parseFloat(document.getElementById("PrecioUno").value);
    Numero2=parseFloat(document.getElementById("PrecioDos").value);
    Numero3=parseFloat(document.getElementById("PrecioTres").value);
    Resultado=(Numero1+Numero2+Numero3 / 3);
    alert("El promedio es " + Resultado);
}
function PrecioFinal () 
{
    Numero1=parseFloat(document.getElementById("PrecioUno").value);
    Numero2=parseFloat(document.getElementById("PrecioDos").value);
    Numero3=parseFloat(document.getElementById("PrecioTres").value);
     Resultado=(Numero1+Numero2+Numero3*0.21);
     alert("El resultado mas el iva es " + Resultado);

}