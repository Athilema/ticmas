document.getElementById("botonFormulario").onclick = function () {
	document.getElementById("principal").style.display = "none";
	document.getElementById("mensajeError").innerHTML = "Funcion no disponible. Comunicarse por el siguiente medio";
}

const boton = document.getElementById("botonFormulario");
boton.addEventListener () {
	document.getElementById("principal").style.display = "none";
	document.getElementById("mensajeError").innerHTML = "Funcion no disponible. Comunicarse por el siguiente medio";
}
