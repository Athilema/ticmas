var contador = 0;

document.getElementById("botonGuias").onclick = function () {
	if (contador === 0) {
		contador = 1;
		document.getElementById("nav").style.border = "3px solid red";
		document.getElementById("menu").style.border = "3px solid red";
		document.getElementById("menu1").style.border = "3px solid red";
		document.getElementById("menu2").style.border = "3px solid red";
		document.getElementById("cuerpo").style.border = "3px solid red";
		document.getElementById("superior").style.border = "3px solid red";
		document.getElementById("titulo").style.border = "3px solid red";
		document.getElementById("foto").style.border = "3px solid red";
		document.getElementById("barra_lateral").style.border = "3px solid red";
		document.getElementById("principal").style.border = "3px solid red";
		document.getElementById("botonGuias").style.border = "3px solid red";
		document.getElementById("java").style.border = "3px solid red";
	}
	
	else {
		contador = 0;
		document.getElementById("nav").style.border = "none";
		document.getElementById("menu").style.border = "none";
		document.getElementById("menu1").style.border = "none";
		document.getElementById("menu2").style.border = "none";
		document.getElementById("cuerpo").style.border = "1px solid black";
		document.getElementById("superior").style.border = "none";
		document.getElementById("titulo").style.border = "none";
		document.getElementById("foto").style.border = "none";
		document.getElementById("barra_lateral").style.border = "none";
		document.getElementById("principal").style.border = "none";
		document.getElementById("java").style.border = "none";
		document.getElementById("botonGuias").style.border = "none";
		document.getElementById("java").style.border = "none";
		
	}
}
