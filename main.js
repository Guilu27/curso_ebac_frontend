const valorCampoA = document.getElementById("input-a");
const valorCampoB = document.getElementById("input-b");

const form = document.getElementById("form-comparator");

// function compararCampos(valorA, valorB) {
//   return valorB > valorA;
// }

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorA = valorCampoA.value;
  const valorB = valorCampoB.value;
  const mensagemSucesso = "Formulário válido.";
  const mensagemErro = "Formulário inválido.";

  if (valorB > valorA) {
    document.querySelector(".message").innerHTML = mensagemSucesso;
    document.querySelector(".message").classList.add("success");
    document.querySelector(".message").classList.remove("error");

    valorCampoA.value = "";
    valorCampoB.value = "";
  } else {
    document.querySelector(".message").innerHTML = mensagemErro;
    document.querySelector(".message").classList.add("error");
    document.querySelector(".message").classList.remove("success");

    valorCampoA.value = "";
    valorCampoB.value = "";
  }
});
