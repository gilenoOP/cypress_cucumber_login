import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

Given("que acesso a página de login", function () {

  cy.visit('/')
});

When("submeto minhas credenciais com {string} e {string}", function (user, password) {
  user
    ? cy.get('input[name=user]')
      .should('be.visible')
      .type(user)
    : cy.log('Username is empty')

  password
    ?
    cy.get('input[name=pass]')
      .should('be.visible')
      .type(password)
    : cy.log('Password is empty')

  cy.contains('button', 'Entrar')
    .should('be.visible')
    .click()
})

Then("sou autenticado no sistema", function () {
  cy.get('#swal2-title')
    .should('be.visible')
    .should('have.text', 'Tudo certo!')
  cy.get('#swal2-html-container')
    .should('be.visible')
    .should('have.text', 'Suas credenciais são válidas :)')
  cy.get('.swal2-confirm')
    .should('be.visible')
    .click()
  cy.get('.swal2-popup')
    .should('not.exist')
  cy.get('.App-logo')
    .should('be.visible')
});

Then("sistema apresenta mensagem impeditiva {string}", function (notice) {
  cy.contains(notice)
});
