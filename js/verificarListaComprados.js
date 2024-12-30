const conteinerListaComprado = document.getElementById("conteiner-lista-comprado");

export function verificarListaComprados(lista){
if (lista.childElementCount === 0) {
    conteinerListaComprado.style.display = "none";
} else {
    conteinerListaComprado.style.display = "block";
}
}