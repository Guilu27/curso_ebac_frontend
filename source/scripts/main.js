const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");

let formEValido = false;

function validaNome(nomeCompleto) {
  const nomeCompletoArray = nomeCompleto.split(" ");

  return nomeCompletoArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `O montante de: <strong>${valorDeposito.value}</strong> depositado para o cliente: <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${numeroContaBeneficiario.value}</strong>`;

  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valorDeposito.value = "";
  } else {
    document.querySelector(".error-message").style.display = "block";

    nomeBeneficiario.style.border = "1px solid red";
  }
});

nomeBeneficiario.addEventListener("keyup", function (e) {
  formEValido = validaNome(e.target.value);

  if (!formEValido) {
    document.querySelector(".error-message").style.display = "block";

    nomeBeneficiario.classList.add("error");
  } else {
    document.querySelector(".error-message").style.display = "none";

    nomeBeneficiario.classList.remove("error");
  }
});
