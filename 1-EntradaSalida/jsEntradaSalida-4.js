/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	  var nombre;
      var mensaje = ("Escriba su nombre");
     nombre = prompt(mensaje);
     document.getElementById("elNombre").value = nombre;

}

