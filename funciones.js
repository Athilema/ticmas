const boton = document.getElementById("botonFormulario");
boton.addEventListener ("click", funcion(){
	document.getElementById("principal").style.display = "none";
	document.getElementById("mensajeError").innerHTML = "Funcion no disponible. Comunicarse por el siguiente medio";
});
