/// <reference types="cypress" />

describe("Testes da Agenda de Contatos", () => {
  const nome = "gui";
  const email = "gui@test.com";
  const telefone = "48 98765-4321";

  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve adicionar um novo contato à agenda", () => {
    cy.get(".contato")
      .its("length")
      .then((length) => {
        cy.screenshot("adicionar-contato-antes");
        cy.get(`input[type="text"]`).type(nome);
        cy.get('[type="email"]').type(email);
        cy.get('[type="tel"]').type(telefone);
        cy.get(".adicionar").click();

        cy.get(".contato").should("have.length", length + 1);
      });

    cy.screenshot("adicionar-contato-depois");
  });

  it("Deve editar um contato na agenda", () => {
    cy.get(".edit").first().click();

    cy.get('input[type="text"]').clear().type(nome);
    cy.get('[type="email"]').clear().type(email);
    cy.get('[type="tel"]').clear().type(telefone);

    cy.get(".alterar").click();

    cy.get(".sc-eDDNvR")
      .first()
      .should("have.text", `${nome}${telefone}${email}`);

    cy.screenshot("editar-contato");
  });

  it("Deve remover um contato da agenda", () => {
    cy.get(".contato")
      .its("length")
      .then((length) => {
        cy.get(".delete").first().click();

        cy.get(".contato").should("have.length", length - 1);
      });

    cy.screenshot("remover-contato");
  });
});
