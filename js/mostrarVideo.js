import { conectaApi } from "./conectaApi.js";

const elementoLista = document.querySelector('[data-lista');

export default function constroiCard(video) {
    const card = document.createElement('li');
    card.className = 'videos__item';
    card.innerHTML = `
    <iframe width="100%" height="72%" src="${video.url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${video.imagem}" alt="logo canal alura">
        <h3>${video.titulo}</h3>
        <p>${video.descricao}</p>
    </div>
    `

    return card;
}

async function listarVideosNaPage() {
    try {
        const listaApi = await conectaApi.listaVideo();
        listaApi.forEach(element => elementoLista.appendChild(constroiCard(element)));
    } catch(e) {
        elementoLista.innerHTML = `<div><h2 class="mensagem__titulo">Não foi possível carregar os videos.</h2</div>`
    }
}

listarVideosNaPage();

