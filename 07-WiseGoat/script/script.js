const button = document.getElementById("conselho");
const url = "https://api.adviceslip.com/advice";
const paragrafo = document.getElementById("paragrafo");

//const abc = () => {
//  let xhttp = new XMLHttpRequest();
//  xhttp.open("GET", url, true);
//  xhttp.send();
//  result = xhttp.responseText;
//};

const abc = () => {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const advice = data.slip.advice;
      localStorage.setItem("advice", JSON.stringify(advice));
      // endereço da página em ambiente local
      window.location.href = "http://127.0.0.1:5500/07-WiseGoat/advice.html";
    })
    .catch(function () {
      console.log("Booo");
    });
};

button.addEventListener("click", abc);
