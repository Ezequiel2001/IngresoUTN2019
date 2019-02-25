function Mostrar() {


	var positivo = 0;
	var negativo = 1;
	var numero;
	var flag = 0;
	var respuesta = 's';
	do {
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero >= 0) {
			positivo = positivo + numero;
		}
		else {
			negativo = negativo * numero;
			flag = 1;
		}
		respuesta = prompt("Quiere ingresar mas numeros?(s/n)").toLowerCase();
	} while (respuesta == "s");

	document.getElementById('suma').value = positivo;
	if (flag == 0) {
		negativo = 0;
	}
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN
