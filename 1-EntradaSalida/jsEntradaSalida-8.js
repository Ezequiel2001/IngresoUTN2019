/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Numero1;
    var Numero2;
    var resto;

    Numero1=(document.getElementById("numeroDividendo").value);
    Numero2=(document.getElementById("numeroDivisor").value);
    resto= Numero1 % Numero2 ;
    alert("El resto es " + resto);
}
