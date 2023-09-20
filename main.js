function Personagem(nome, origem, apelido, akumaNoMi) {
  this.nome = nome;
  this.origem = origem;
  this.apelido = apelido;
  this.akumaNoMi = akumaNoMi;

  this.apresentacao = function () {
    console.log(
      `Aquele é ${this.nome}, mais conhecido como ${this.apelido} ele vem ${this.origem}. \n`
    );
  };
}

function Pirata(nome, origem, apelido, akumaNoMi, recompensa) {
  this.recompensa = recompensa;

  Personagem.call(this, nome, origem, apelido, akumaNoMi);

  this.fugindo = function (marinheiro) {
    console.log(
      `O pirata ${this.apelido} e seu bando estão fugindo do marinheiro ${marinheiro.nome}. \n`
    );
  };
}

function Marinha(nome, origem, apelido, akumaNoMi, patente) {
  this.patente = patente;

  Personagem.call(this, nome, origem, apelido, akumaNoMi);

  this.perseguindo = function (pirata) {
    console.log(
      `O ${this.patente} da Marinha, ${this.nome}, está perseguindo o pirata ${pirata.apelido} que possui recompensa de ${pirata.recompensa} Berries. \n`
    );
  };
}

const luffy = new Pirata(
  "Monkey D. Luffy",
  "do Reino Goa, East Blue",
  "Luffy do Chapéu de Palha",
  "Gomu Gomu no Mi",
  "30.000.000"
);

const garp = new Marinha(
  "Monkey D. Garp",
  "do Reino Goa, East Blue",
  "Herói da Marinha",
  "N/A",
  "Vice Almirante"
);

const shanks = new Pirata(
  "Shanks",
  "de um lugar desconhecido",
  "Shanks, o Ruivo",
  "N/A",
  "1.004.000.000"
);

garp.apresentacao();
luffy.apresentacao();
shanks.apresentacao();

garp.perseguindo(luffy);
luffy.fugindo(garp);

garp.perseguindo(shanks);
shanks.fugindo(garp);
