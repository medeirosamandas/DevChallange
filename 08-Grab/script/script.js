const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const valida = () => {
  //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
  if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value == "" ||
    email.value == null
  ) {
    alert("Por favor, indique um e-mail válido.");
    email.focus();
    return false;
  }
  if (
    password.value.length < 8 ||
    password.value == "" ||
    password.value == null
  ) {
    alert("Insira um password de no mínimo 8 caracteres");
    password.focus();
    return false;
  }
  alert("campos válidos!");
  password.value = "";
  email.value = "";
};

submit.addEventListener("click", valida);
