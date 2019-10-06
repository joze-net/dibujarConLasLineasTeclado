document.addEventListener(/*"keydown"*/"keydown",dibujar);
var btn=document.getElementById("limpiar");
btn.addEventListener("click",limpiar);
var d=document.getElementById('dibujito');
var lienzo=d.getContext("2d");
var btnAceptar=document.getElementById("btnAceptar");
btnAceptar.addEventListener("click",aceptacion);

d.addEventListener("mouseup",puntoInicio);

var xinicial;
var yinicial;
var xfinal;
var yfinal;
var colorLinea;
var anchoLinea;

function puntoInicio(evento){
	
	
	

	xinicial=evento.offsetX;
	yinicial=evento.offsetY;
	xfinal=evento.offsetX;
	yfinal=evento.offsetY;
}





function aceptacion(){
	 colorLinea=document.getElementById("txtColorLinea").value;
	 anchoLinea=document.getElementById("txtAnchoLinea").value;
	 document.getElementById("txtAnchoLinea").value;

}

function limpiar(){
	lienzo.clearRect(0,0,d.width,d.height);
	xinicial=150;
	yinicial=150;
	xfinal=150;
	yfinal=150;

}

function dibujar(evento){

	
	var movimiento=5;
	var letras = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39
	}
    
   

	
    
	switch (evento.keyCode) {
		case letras.UP:
			
			if(yfinal>1){
				yfinal=yfinal-movimiento;
			hacerLinea(xinicial,yinicial,xfinal,yfinal,colorLinea,anchoLinea);
			yinicial=yfinal;
			}else{
				alert("llegaste al limite");
			}

			
						
			break;

		case letras.DOWN:
			
			if(yfinal<d.height-1){
				yfinal=yfinal+movimiento;
			    hacerLinea(xinicial,yinicial,xfinal,yfinal,colorLinea,anchoLinea);
			    yinicial=yfinal;
			}else{
				alert("llegaste al limite");
			}
			
			break;

		case letras.LEFT:
			
			if(xfinal>1){

				xfinal=xfinal-movimiento;
			    hacerLinea(xinicial,yinicial,xfinal,yfinal,colorLinea,anchoLinea);
			    xinicial=xfinal;

			}else {
				alert("llegaste al limite");
			}
			
			break;

		case letras.RIGHT:
			
			if (xfinal<d.width-1) {

				xfinal=xfinal+movimiento;
			    hacerLinea(xinicial,yinicial,xfinal,yfinal,colorLinea,anchoLinea);
			    xinicial=xfinal;

			}else {
				alert("llegaste al limite");
			}
			
			break;


		default:
			
			break;
	}
}

	

	function hacerLinea(xinicial,yinicial,xfinal,yfinal,color,anchoLinea){

d.height = screen.width;
		lienzo.beginPath();
		lienzo.strokeStyle= color;
		lienzo.lineWidth=anchoLinea;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();
       
	}




	
