function Mostrar() {

	var contador = 0;
	var maximo;
	var minimo;
	var respuesta = 's';
	var numero;
	do {
		numero = parseInt(prompt("Ingrese un numero."));
		if (contador == 0) {
			maximo = numero;
			minimo = numero;
		}
		if (numero > maximo) {
			maximo = numero;
		}
		if (numero < minimo) {
			minimo = numero;
		}
		contador++;
		respuesta = prompt("Quiere ingresar mas numeros?(s/n).").toLowerCase();

	} while (respuesta == "s");
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN