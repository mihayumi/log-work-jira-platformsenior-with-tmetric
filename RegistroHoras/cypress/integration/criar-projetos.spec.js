/// <reference types="cypress" />

context('Criar projetos no TMetric', () => {
    it('Deve criar meus projetos pendentes que não existem no TMetric com a chave do jira', () => {
        cy.visit(`${Cypress.env('baseUrlJira')}/issues/?filter=-1`)
        cy.loginJira(Cypress.env('userJira'), Cypress.env('passwordJira'))
        cy.get('.issue-list li .issue-content-container').each(($chavesJira) => {
            const jiras = Array.from($chavesJira.find('.issue-link-key'), chaveJira => chaveJira.innerText);
            const descriptionJiras = Array.from($chavesJira.find('.issue-link-summary'), chaveJira => chaveJira.innerText);
            cy.request({
                url: `${Cypress.env('baseUrlTMetric')}/api/accounts/${Cypress.env('accountId')}/projects`,
                headers: { Authorization: Cypress.env('tokenTMetric')}
            }).its('body').then((body) => { 
                var result = true;
                for (var i = 0; i < body.length; i++) {
                    let projetoTmetric = body[i].projectName;
                    let jiraTMetric = projetoTmetric.substr(0, projetoTmetric.indexOf(' '));
                    if (jiraTMetric == jiras) {
                        result = false;
                        break;
                    }
                }

                if (result == true) {
                    cy.request({
                        method: 'POST',
                        url: `${Cypress.env('baseUrlTMetric')}/api/accounts/${Cypress.env('accountId')}/projects`,
                        form: true,
                        headers: { Authorization: Cypress.env('tokenTMetric')},
                        body: {
                            accountId: `${Cypress.env('accountId')}`,
                            avatar: null,
                            budgetPeriod: 0,
                            budgetingMethod: 0,
                            groups: [],
                            invoiceMethod: 0,
                            isBillable: false,
                            members: [],
                            notes: null,
                            overBudgetBehaviour: 0,
                            projectFeePeriod: 0,
                            projectName: `${jiras} - ${descriptionJiras}`,
                            projectStatus: 1,
                            spentRatesType: 1,
                            workTypes: []
                        }
                    })
                }
            })
        })
    })
})