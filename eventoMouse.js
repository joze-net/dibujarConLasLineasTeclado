var canvas=document.getElementById("dibujito");
canvas.addEventListener("mousemove",modoDibujo);
canvas.addEventListener("mouseup",inicio);
canvas.addEventListener("mousedown",pausa);
lienzo=canvas.getContext("2d");

var dibujando=false;

function modoDibujo(evento){
	
	if (dibujando) {
		x=evento.offsetX;
	y=evento.offsetY;
	console.log("x="+x+" y="+y+" offx="+evento.offsetX+" offy="+evento.offsetY);
	hacerLinea(x,y,x+2,y+2);
	}
	
}

function hacerLinea(xinicial,yinicial,xfinal,yfinal){

		lienzo.beginPath();
		lienzo.strokeStyle= "black";
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