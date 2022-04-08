const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

let dia = localStorage.getItem("dia");
let mes = localStorage.getItem("mes");
let ano = localStorage.getItem("ano");

// sobre Date.UTC()
// primeiro parametro é o ano
// segundo parametro é o mês - 1
// terceiro parâmetro é o dia
let futuro = Date.UTC(ano, mes, dia);
let agora = Date.now();

let tempo = parseInt(futuro / 1000) - parseInt(agora / 1000);

function countdown() {
  // Se o tempo não for zerado
  if (tempo - 1 >= -1) {
    // Pega a parte inteira dos dias
    let dia = parseInt(tempo / 86400);

    // Pega a parte inteira dos dias
    let hr = parseInt(tempo / 3600);
    while (hr > 24) {
      hr -= 24;
    }

    if (hr == 24) {
      hr = 0;
    }

    // Pega a parte inteira dos minutos
    let min = parseInt(tempo / 60);

    while (min > 60) {
      min -= 60;
    }

    if (min == 60) {
      min = 0;
    }

    // Calcula os segundos restantes
    let seg = tempo % 60;

    // Formata o número menor que dez, ex: 08, 07, ...
    if (min < 10) {
      min = "0" + min;
      min = min.substr(0, 2);
    }
    if (seg <= 9) {
      seg = "0" + seg;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (dia < 10) {
      dia = "0" + dia;
    }

    minutos.innerText = min;
    segundos.innerText = seg;
    dias.innerText = dia;
    horas.innerText = hr;

    // Define que a função será executada novamente em 1000ms = 1 segundo
    setTimeout("countdown()", 1000);

    // diminui o tempo
    tempo--;

    // Quando o contador chegar a zero faz esta ação
  } else {
  }
}

countdown();
