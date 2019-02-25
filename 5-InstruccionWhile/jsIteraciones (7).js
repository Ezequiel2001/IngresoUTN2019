function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var respuesta = 'si';
	/*do {
		respuesta = ("Quiere ingresar mas numeros?");
		numero = parseInt(prompt("Ingrese un numero."));
		acumulador = acumulador + numero;

	} while (respuesta == "si");*/
	respuesta = prompt("Quiere ingresar mas numeros?");
	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador;
}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN