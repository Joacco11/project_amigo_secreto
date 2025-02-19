// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];



function agregarAmigo() {
    nombreAmigo=document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    listaAmigos.push(nombreAmigo);
    input.value = "";
}