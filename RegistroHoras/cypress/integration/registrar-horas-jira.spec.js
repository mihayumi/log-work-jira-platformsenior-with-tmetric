/// <reference types="cypress" />

context('Registrar horas no Jira', () => {
    it('Deve registrar horas de trabalho no jira se o timer do TMetric tiver um projeto', () => {
        const today = Cypress.moment().format('YYYY-MM-DD')
        const tomorrow = Cypress.moment().add(1, 'days').format('YYYY-MM-DD')
        cy.request({
            method: 'GET',
            url: `${Cypress.env('baseUrlTMetric')}/api/accounts/${Cypress.env('accountId')}/timeentries/${Cypress.env('userProfileId')}?timeRange.startTime=${today}&timeRange.endTime=${tomorrow}`,
            headers: { Authorization: Cypress.env('tokenTMetric')}
        }).its('body').then((body) => { 
            for (var i = 0; i < body.length; i++) {
                if (body[i].hasOwnProperty('projectName') && body[i].hasOwnProperty('endTime')) {
                    const jira = body[i].projectName.substr(0, body[i].projectName.indexOf(' '));
                    cy.visit(`${Cypress.env('baseUrlJira')}/browse/${jira}`)

                    cy.get("body").then($body => {
                        if ($body.find('#login-form-username').length > 0) {
                            cy.loginJira(Cypress.env('userJira'), Cypress.env('passwordJira'))
                        };
                    })

                    cy.get('#worklog-tabpanel').click()
                    cy.get('#opsbar-operations_more').click()
                    cy.get('#log-work').click({force: true})

                    cy.get('#log-work-time-logged', { timeout: 10000 })
                      .type(getHoursMinutesFromDateTime(body[i].startTime, body[i].endTime))

                    const startDateTime = Cypress.moment(body[i].startTime).format('DD/MM/YY h:mm a');

                    cy.get('#log-work-date-logged-date-picker').clear().type(startDateTime)
                    
                    if (body[i].details.description !== '') {
                        cy.get('.textarea').eq(1).click().type(body[i].details.description)
                    }

                    cy.get('#log-work-submit').click()
                    cy.get('.aui-message-success', { timeout: 10000 }).should('be.visible')
                }
            }
        })
    })

    function getHoursMinutesFromDateTime(startTime, endTime) {
        startTime = new Date(startTime)
        endTime = new Date(endTime)
        let minutesStart = (startTime.getHours() * 60 ) + (startTime.getMinutes())
        let minutesEnd = (endTime.getHours() * 60) + (endTime.getMinutes())
        let totalMinutes = minutesEnd-minutesStart
        let hours = Math.floor(totalMinutes/60)
        let minutes = totalMinutes % 60
        return `${hours}h ${minutes}m`
    }
})