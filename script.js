const segundos = document.getElementById("segundos");
const minutos = document.getElementById("minutos");
const horas = document.getElementById("horas");
const dias = document.getElementById("dias");
const semanas = document.getElementById("semanas");
const meses = document.getElementById("meses");
const anos = document.getElementById("anos");
const reset = document.getElementById("reset");
const contagem = document.getElementById("contagem");

let contador_numero = Number(localStorage.getItem("contador"));
contagem.textContent = contador_numero;

let contador_data = localStorage.getItem("data"); //Se não existir data no localstorage essa porra vai retornar null. Se retornar null, na hora de criar data ele mete o ano de 1970

if (contador_data) { //Se já existir no local storage, ele vai pegar aquela data e reutilizar
    contador_data = new Date(contador_data);
} else { //Se não existir, ele vai criar uma data nova a partir de agora
    contador_data = new Date();
    localStorage.setItem("data", contador_data.toISOString());
}

setInterval(() => {
    const agora = new Date();

    const tempo = agora - contador_data;

    segundos.textContent = Math.floor(tempo / 1000) % 60;
    minutos.textContent = Math.floor(tempo / (1000 * 60)) % 60;
    horas.textContent = Math.floor(tempo / (1000 * 60 * 60)) % 60;
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
    localStorage.setItem("data", contador_data.toISOString());
})


