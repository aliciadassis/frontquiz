import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const botoesAssunto = document.querySelectorAll(".assuntos button");

botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto);
});

function selecionarAssunto(evento) {
    const assunto = evento.currentTarget.innerText.trim();
    localStorage.setItem("assunto", assunto);
    window.location.href = "./pages/quiz/quiz.html";
}
