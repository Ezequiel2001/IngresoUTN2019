function Mostrar() {

	var contador = 0;
	//declarar contadores y variables 

	var respuesta = "s";
	var numero;
	var negativo = 0;
	var positivo = 0;
	var cantidadpositivo = 0;
	var cantidadnegativo = 0;
	var cantidadpares = 0;
	var cantidadceros = 0;
	var promediopositivo;
	var promedionegativo;
	var diferencia;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero > 0) {
			positivo = positivo + numero;
			cantidadpositivo++;
		}
		else if (numero == 0) {
			cantidadceros++;
		}
		else {
			negativo = negativo + numero;
			cantidadnegativo++;
		}
		if (numero % 2 == 0) {
			cantidadpares++;
		}
		respuesta=prompt("Quiere ingresar mas numeros?.(s/n)");
	} while (respuesta == "s");

	promedionegativo = cantidadnegativo / negativo;
	promediopositivo = cantidadpositivo / positivo;
	diferencia = cantidadpositivo - cantidadnegativo;

	document.write("La suma de los negativos es: " + negativo + "<br>");
	document.write("La suma de los positivos es: " + positivo + "<br>");
	document.write("La cantidad de positivos es: " + cantidadpositivo + "<br>");
	document.write("La cantidad de negativos es: " + cantidadnegativo + "<br>");
	document.write("La cantidad de ceros es: " + cantidadceros + "<br>");
	document.write("La cantidad de números pares es: " + cantidadpares +"<br>");
	document.write("El promedio de positivos es: " + promediopositivo + "<br>");
	document.write("El promedios de negativos es: " + promedionegativo + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN
