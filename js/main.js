$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
      email: "Por favor, insira o seu e-mail",
      telefone: "Por favor, insira o seu telefone",
      cpf: "Por favor, insira o seu CPF",
      endereco: "Por favor, insira o seu endereço",
      cep: "Por favor, insira o seu CEP",
    },
    submitHandler: function (form) {
      $("form p").text("Cadastro realizado com sucesso.");
      $("form p").removeClass("erro");
      $("form p").addClass("sucesso");
    },
    invalidHandler: function (evento, validador) {
      let camposInvalidos = validador.numberOfInvalids();

      if (camposInvalidos == 1) {
        $("form p").text(
          `${camposInvalidos} campo não foi preenchido corretamente.`
        );
      } else {
        $("form p").text(
          `${camposInvalidos} campos não foram preenchidos corretamente.`
        );
      }
      $("form p").removeClass("sucesso");
      $("form p").addClass("erro");
    },
  });
});
