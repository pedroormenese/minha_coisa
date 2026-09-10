const segundos = document.getElementById("segundos");
const minutos = document.getElementById("minutos");
const dias = document.getElementById("dias");
const semanas = document.getElementById("semanas");
const meses = document.getElementById("meses");
const reset = document.getElementById("reset");
const contagem = document.getElementById("contagem");

let contador = Number(localStorage.getItem("contador"));
contagem.textContent = contador;


let inicio = new Date("2026-09-10T10:00:00");

setInterval(() => {
    const agora = new Date();

    const tempo = agora - inicio;

    segundos.textContent = Math.floor(tempo / 1000) % 60;
    minutos.textContent = Math.floor(tempo / (1000 * 60)) % 60;
    dias.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24)) % 24;
    semanas.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24 * 7)) % 7;
    meses.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24 * 30));
    anos.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24 * 365)) % 365;

}, 1000)

reset.addEventListener('click', () => {
    inicio = Date.now();

    contador++;
    contagem.innerText = contador;

    localStorage.setItem("contador", contador);
})


