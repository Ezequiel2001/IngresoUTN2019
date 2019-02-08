/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
  var Numero1;
  var Numero2;
  var suma;

  Numero1=parseInt(document.getElementById("numeroUno").value);
  Numero2=parseInt(document.getElementById("numeroDos").value);
 
  suma=Numero1 + Numero2;

  alert("La suma es " + suma);


}

