const segundos = document.getElementById("segundos");
const minutos = document.getElementById("minutos");
const dias = document.getElementById("dias");
const semanas = document.getElementById("semanas");
const meses = document.getElementById("meses");
const reset = document.getElementById("reset");
const contagem = document.getElementById("contagem");

let contador_numero = Number(localStorage.getItem("contador"));
contagem.textContent = contador_numero;

let contador_data = new Date(localStorage.getItem("data")) || new Date();

setInterval(() => {
    const agora = new Date();

    const tempo = agora - contador_data;

    segundos.textContent = Math.floor(tempo / 1000) % 60;
    minutos.textContent = Math.floor(tempo / (1000 * 60)) % 60;
    dias.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24)) % 24;
    semanas.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24 * 7)) % 7;
    meses.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24 * 30));
    anos.textContent = Math.floor(tempo / (1000 * 60 * 60 * 24 * 365)) % 365;

}, 1000)

reset.addEventListener('click', () => {
    contador_data = new Date();

    contador_numero++;
    contagem.innerText = contador_numero;

    localStorage.setItem("contador", contador_numero);
    localStorage.setItem("data", contador_data);
})


