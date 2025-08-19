// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Crear lista de amigos
let amigos = [];

let limite;

// Boton agregar amigo
function agregarAmigo() {
    // Capturar el valor del input
    let valor = document.getElementById('amigo').value;
    if (valor.trim() !== "");
        amigos.push(valor);
        limite = amigos.length;
        //Limpiar 
        document.getElementById('amigo').value = "";
        mostrarNombres();

}

// Funcion para numero aleatorio
function numeroAleatorio() {
    return  Math.floor(Math.random() * limite);
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

function sortearAmigo() {
    document.getElementById("listaAmigos").hidden = true;
    mostrarAmigo();
}

function mostrarAmigo() {
    let ul2 = document.getElementById("resultado");
    ul2.innerHTML = "";
    let indice = numeroAleatorio();
    console.log("tamaño de lista: " + limite)
    console.log("numero aleatorio: " + indice)
    let li2 = document.createElement("li")
    li2.textContent = amigos[indice];
    ul2.appendChild(li2);
}
