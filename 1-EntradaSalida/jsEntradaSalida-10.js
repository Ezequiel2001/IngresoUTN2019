/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var Numero1;
    var importe;
    Numero1=parseFloat(document.getElementById("importe").value);
    importe= (Numero1 * 25 /100);
    document.getElementById("resultado").value=importe;
}
