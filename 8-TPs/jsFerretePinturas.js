/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    var Fahrenheit;
    var celsius;
    Fahrenheit=parseFloat(document.getElementById("Temperatura").value);
    celsius=(Fahrenheit-32)*5/9;
    alert("Su temperatura es de " + celsius + "centigrados");

}

function CentigradosFahrenheit () 
{
    var Fahrenheit
    var celsius
    celsius=parseFloat(document.getElementById("Temperatura").value);
    Fahrenheit=9/5*celsius + 32;
    alert("Su temperatura es de "+Fahrenheit+" fahrenheit");
}
