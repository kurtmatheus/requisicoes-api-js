import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');
const dadosVideo = document.querySelectorAll('[data-video]');

async function criaVideo(evento) {    
    evento.preventDefault();
    const video = {
        titulo: null,
        url: null,
        imagem: null,
        descricao: Math.floor(Math.random() * 10).toString()
    };

    dadosVideo.forEach(element => {
        video[element.id] = element.value;
    });

    try {
        await conectaApi.criaVideo(video);
        window.location.href = "../pages/envio-concluido.html";
    } catch(e) {
        alert(e);
    }
}

formulario.addEventListener('submit', evento => criaVideo(evento));