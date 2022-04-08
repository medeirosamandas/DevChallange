const date = document.getElementById("date");
const button = document.getElementById("button");

const saveDate = () => {
  if (date.value != "") {
    let array = date.value.split("-");
    for (let i = 0; i < array.length; i++) {
      array[i] = parseInt(array[i]);
    }
    localStorage.setItem("dia", JSON.stringify(array[2]));
    localStorage.setItem("mes", JSON.stringify(array[1] - 1));
    localStorage.setItem("ano", JSON.stringify(array[0]));
    window.location.href = "./contador.html";
  }
};

button.addEventListener("click", saveDate);
