import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideo.js";

const termoBusca = document.querySelector('#pesquisar')

async function buscaVideos(evento) {
    evento.preventDefault();

    const listaVideosFiltrados = await conectaApi.buscaVideo(termoBusca.value);

    const elementoLista = document.querySelector('[data-lista]');
    elementoLista.innerHTML = "";

    listaVideosFiltrados.length == 0 ? elementoLista.innerHTML = `<div><h2 class="mensagem mensagem__titulo">Sem resultados para Busca.</h2</div>` : listaVideosFiltrados.forEach(element => elementoLista.appendChild(constroiCard(element)));
}

termoBusca.addEventListener('keyup', evento => buscaVideos(evento));

