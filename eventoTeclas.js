document.addEventListener(/*"keydown"*/"keyup",dibujar);

function dibujar(evento){

	var letras = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39
	}

	switch (evento.keyCode) {
		case letras.UP:
			console.log("voy arriba");
			break;

		case letras.DOWN:
			console.log("voy abajo");
			break;

		case letras.LEFT:
			console.log("voy a la izquierda");
			break;

		case letras.RIGHT:
			console.log("voy a al derecha");
			break;
		default:
			console.log("letra diferente");
			break;
	}


	console.log(evento.keyCode);
}