// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Crear lista de amigos
let amigos = [];

// Boton agregar amigo
function agregarAmigo() {
    // Capturar el valor del input
    let valor = document.getElementById('amigo').value;
    if (valor.trim() !== "");
        amigos.push(valor);
        //Limpiar 
        document.getElementById('amigo').value = "";
        console.log(amigos)

        mostrarNombres();

}

// Funcion para numero aleatorio
function numeroAleatorio() {
    return  Math.floor(Math.random() * 10) + 1;
}

// Funcion para listar nombres
function mostrarNombres() {
    let ul = document.getElementById("listaAmigos");
    //Limpiar la lista de HTML (ul) en cada botton agregarAmigo
    ul.innerHTML = "";

    for (let nombre of amigos) {

        let li = document.createElement("li");
        li.textContent = nombre;
        // Agregar elemtos a "ul"
        ul.appendChild(li);
    }
}

function mostrarAmigoElegido() {
    
}

