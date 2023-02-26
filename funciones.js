document.getElementById("botonFormulario").onclick = function () {
	document.getElementById("principal").style.display = "none";
	document.getElementById("mensajeError").innerHTML = "Funcion no disponible. Comunicarse por el siguiente medio";
}

document.getElementById("botonGuias").onclick = function () {
	document.getElementById("nav").style.border = "5px solid red";

}