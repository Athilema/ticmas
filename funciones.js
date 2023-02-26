function mensajeError () {
	document.getElementById("principal").style.display = "none";
	document.getElementById("mensajeError").innerHTML = "Funcion no disponible. Comunicarse por el siguiente medio";
}

document.getElementById("botonFormulario").addEventListener("click", mensajeError);
