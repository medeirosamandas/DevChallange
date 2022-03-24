const paragrafo = document.getElementById("paragrafo");
const home = document.getElementById("home");

const advice = localStorage.getItem("advice");
paragrafo.innerText = advice;

home.onclick = () => {
  localStorage.clear();
  // endereço da página em ambiente local
  window.location.href = "http://127.0.0.1:5500/07-WiseGoat/index.html";
};
