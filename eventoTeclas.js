document.addEventListener(/*"keydown"*/"keydown",dibujar);
var btn=document.getElementById("limpiar");
btn.addEventListener("click",limpiar);
var d=document.getElementById('dibujito');
var lienzo=d.getContext("2d");



var xinicial=150;
var yinicial=150;
var xfinal=150;
var yfinal=150;

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
			
			if(yfinal>0){
				yfinal=yfinal-movimiento;
			hacerLinea(xinicial,yinicial,xfinal,yfinal);
			yinicial=yfinal;
			}else{
				alert("llegaste al limite");
			}

			
						
			break;

		case letras.DOWN:
			
			if(yfinal<d.height){
				yfinal=yfinal+movimiento;
			    hacerLinea(xinicial,yinicial,xfinal,yfinal);
			    yinicial=yfinal;
			}else{
				alert("llegaste al limite");
			}
			
			break;

		case letras.LEFT:
			
			if(xfinal>0){

				xfinal=xfinal-movimiento;
			    hacerLinea(xinicial,yinicial,xfinal,yfinal);
			    xinicial=xfinal;

			}else {
				alert("llegaste al limite");
			}
			
			break;

		case letras.RIGHT:
			
			if (xfinal<d.width) {

				xfinal=xfinal+movimiento;
			    hacerLinea(xinicial,yinicial,xfinal,yfinal);
			    xinicial=xfinal;

			}else {
				alert("llegaste al limite");
			}
			
			break;


		default:
			
			break;
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




	
