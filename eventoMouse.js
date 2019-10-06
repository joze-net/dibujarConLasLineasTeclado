var canvas=document.getElementById("dibujito");
canvas.addEventListener("mousemove",modoDibujo);
canvas.addEventListener("mouseup",inicio);
canvas.addEventListener("mousedown",pausa);
canvas.addEventListener("mouseout",pausa);
lienzo=canvas.getContext("2d");
var colorLinea;
var anchoLinea;
d.width = screen.width-40;

var btnAceptar=document.getElementById("btnAceptar");
btnAceptar.addEventListener("click",aceptacion);
var dibujando=false;

function aceptacion(){
	 colorLinea=document.getElementById("txtColorLinea").value;
	 anchoLinea=document.getElementById("txtAnchoLinea").value;
}

function modoDibujo(evento){
	
	if (dibujando) {
	x=evento.offsetX;
	y=evento.offsetY;
	
	hacerLinea(x,y,x+2,y+2,colorLinea,anchoLinea);
	}
	
}

function hacerLinea(xinicial,yinicial,xfinal,yfinal,color,anchoLinea){

		lienzo.beginPath();

		lienzo.strokeStyle= color;
		lienzo.lineWidth=anchoLinea;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();
       
	}
	function pausa(){
		dibujando=false;
	}

	function inicio(){
		dibujando=true;
	}