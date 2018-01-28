var text = document.getElementById("texto_lineas");
var botom = document.getElementById("botoncito");
botom.addEventListener("click", dibujoporclick);



var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var colorcito = "red";
var l = 0;
var lineas = 30;
var yi, xf;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
for(l = 0; l < lineas; l++){
 dibujarLinea(colorcito, 0,yi,xf,300);
  dibujarLinea(colorcito, 300,yi,xf,0);
  yi = 10 *l;
  xf = 10 *(l+1);

   console.log("lineas" + l);

}
  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
  dibujarLinea(colorcito, 299,1,1,1);
  dibujarLinea(colorcito, 299,299,299,1);

  function dibujoporclick()
  {
     alert("no me toque  hay");

  }
