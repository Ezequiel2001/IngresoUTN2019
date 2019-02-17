/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var lamparas;
var descuento;
var resultado;
var descuento2;
var marca;
var iibb;
function CalcularPrecio() {
    lamparas = parseFloat(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    iibb = parseFloat(document.getElementById("precioDescuento").value);
    if (lamparas >= 6) {
        descuento = lamparas * 35;
        descuento2 = descuento * 50 / 100;
        resultado = descuento - descuento2;
        document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
    }
    else if (lamparas == 5) {
        if (marca == "ArgentinaLuz") {
            descuento = lamparas * 35;
            descuento2 = descuento * 40 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
        }
        else {
            descuento = lamparas * 35;
            descuento2 = descuento * 30 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
        }

    }
    else if (lamparas == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = lamparas * 35;
            descuento2 = descuento * 25 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
        }
        else {
            descuento = lamparas * 35;
            descuento2 = descuento * 20 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
        }


    }
    else if (lamparas == 3) {
        if (marca == "ArgentinaLuz") {
            descuento = lamparas * 35;
            descuento2 = descuento * 15 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
        }
        else if (marca == "FelipeLamparas") {
            descuento = lamparas * 35;
            descuento2 = descuento * 10 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);

        }
        else {
            descuento = lamparas * 35;
            descuento2 = descuento * 5 / 100;
            resultado = descuento - descuento2;
            document.getElementById("precioDescuento").value = "$" + resultado.toFixed(2);
        }
    }

    if (iibb >= 120) {
        var resultadoiibb = iibb * 10 / 100;
        iibb += resultadoiibb;
        alert("Usted pago $" + resultado2.toFixed(2) + " de IIBB.");
        //document.getElementById("PrecioDescuento").value = "$" + resultado2.toFixed(2);
    }
}
