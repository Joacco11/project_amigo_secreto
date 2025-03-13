let listaAmigos = [];

console.log(listaAmigos);


function agregarTexto(id, texto) {
    const elemento = document.getElementById(id);
    elemento.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';  
}

function agregarAmigo() {
    nombreAmigo=document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        limpiarCaja();
        return;
    } 
    if (listaAmigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        limpiarCaja();
        return;
    }
    listaAmigos.push(nombreAmigo);
    actualizarLista();
    limpiarCaja();
    console.log(listaAmigos);
}
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";

    for (const amigo of listaAmigos) {
        const li = document.createElement("li"); 
        li.textContent = amigo; 
        lista.appendChild(li);  
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li> Ganador: ${amigoSorteado}</li>`;
    console.log(listaAmigos)
    console.log(amigoSorteado)
}

function reiniciarSorteo() {
    listaAmigos = []; 
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    console.log("Sorteo reiniciado. Lista vacía.");
    console.log(listaAmigos)
}
