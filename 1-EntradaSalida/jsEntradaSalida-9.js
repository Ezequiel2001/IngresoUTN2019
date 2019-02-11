/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
  var Numero1;
  var Numero2;
  var aumento;

  Numero1=parseInt(document.getElementById("sueldo").value);
  aumento= (Numero1 * 10 / 100 );
  Numero2=(Numero1 + aumento);
  document.getElementById("resultado").value=Numero2;
}
