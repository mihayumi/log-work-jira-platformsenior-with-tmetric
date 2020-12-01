/// <reference types="cypress" />

context('Bater ponto no Jira', () => {
    it('Deve bater o ponto no Senior', () => {
        cy.visit(`${Cypress.env('baseUrlSenior')}/senior-x/#/Gestão de Pessoas/1/res%3A%2F%2Fsenior.com.br%2Fhcm%2Fpontomobile%2FclockingEvent?category=frame&link=https%3A%2F%2Fplatform.senior.com.br%2Fhcm-pontomobile%2Fhcm%2Fpontomobile%2F%23%2Fclocking-event`)
        cy.wait(5000)
        cy.loginSenior(Cypress.env('loginSenior'), Cypress.env('passwordSenior'))
        cy.wait(5000)
        cy.iframe('#custom_iframe').find('#s-button-1', {timeout: 10000}).click()
    })
})