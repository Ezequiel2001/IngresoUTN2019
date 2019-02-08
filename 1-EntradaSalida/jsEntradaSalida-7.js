/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var Numero1;
    var Numero2;
    var resta;

    Numero1=parseInt(document.getElementById("numeroUno").value);
    Numero2=parseInt(document.getElementById("numeroDos").value);
    resta=Numero1 - Numero2;
    alert("La resta es " + resta);
}

function multiplicar()
{ 
	var Numero1;
    var Numero2;
    var multiplicar;

    Numero1=parseInt(document.getElementById("numeroUno").value);
    Numero2=parseInt(document.getElementById("numeroDos").value);
    multiplicar=Numero1 * Numero2;
    alert("La multiplicacion es " + multiplicar);

}

function dividir()
{
    var Numero1;
    var Numero2;
    var division;

    Numero1=parseInt(document.getElementById("numeroUno").value);
    Numero2=parseInt(document.getElementById("numeroDos").value);
    division=Numero1 / Numero2;
    alert("La division es " + division);
	
}

