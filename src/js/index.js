/*
Objetivo 1- quando o usuário clicar no botão veja o trailer,
devemos abrir o modal com o vídeo do trailer:

passo 1: dar um jeito de pegar o elementoque representa o botão na tela usando o js;

passo 2: dar um jeito de identificar quando o usuário clicar no botão;

passo 3: dar um jeito de pegar o modal no js;

passo 4: fechar o modal;

Objetivo 2- quando o usuário clicar no x devemos fechar a modal;
*/

const botaoTrailer =document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;



function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
 
