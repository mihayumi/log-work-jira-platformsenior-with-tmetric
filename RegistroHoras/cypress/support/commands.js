import 'cypress-wait-until';
import 'cypress-iframe';

Cypress.Commands.add("loginJira", (user, password) => { 
    cy.get('#login-form-username').type(user) 
    cy.get('#login-form-password').type(password, {log: false}) 
    cy.get('#login-form-submit').click()
})

Cypress.Commands.add("loginSenior", (user, password) => {
    cy.get('#username-input-field').should('exist').type(user)
    cy.get('#password-input-field').type(password, {log: false})
    cy.get('#loginbtn').click()
})

Cypress.Commands.add("loginTMetric", (user, password) => {
    cy.get('#Username').type(user)
    cy.get('#Password').type(password, {log: false})
    cy.get('#login').click()
})