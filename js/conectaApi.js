async function listaVideo() {
    const res = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await res.json();

    return conexaoConvertida;
}

async function criaVideo(video) {
    const res = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: video.titulo,
            descricao: `${video.descricao} mil visualizações.`,
            url: video.url, 
            imagem: video.imagem
        })
    });

    if(!res.ok) {
        throw Error ('Não foi possível Inserir o Vídeo!!');
    }

}

async function buscaVideo(termo) {
    const res = await fetch(`http://localhost:3000/videos?q=${termo}`)
    const listaConvertida = res.json();
    
    return listaConvertida;
}

export const conectaApi = {
    listaVideo,
    criaVideo,
    buscaVideo
}

