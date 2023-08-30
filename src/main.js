document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-sorteador").addEventListener("submit", (e) => {
    e.preventDefault();
    let number = document.getElementById("numero-maximo").value;
    number = parseInt(number);

    let numeroAleatorio = Math.random() * number;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);

    document.getElementById("resultado-valor").innerText = numeroAleatorio;
    document.querySelector(".resultado").style.display = "block";
  });
});
