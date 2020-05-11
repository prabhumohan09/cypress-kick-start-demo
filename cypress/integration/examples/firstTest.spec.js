/// <reference types="Cypress" />

describe('test sutie', function () {
    it('my first test case', function () {

        //load web url
        cy.visit('http://demowebshop.tricentis.com/')

        // register link click action
        cy.get('.ico-register').click()

        // fill the registration details
        cy.get('#gender-male').click()
        cy.get('#FirstName').type('my first name')
        cy.get('#LastName').type('my last name')

        // generate random value
        const email_prefix = Cypress._.random(0, 1e6)
        const email_Id = 'mytestemail_'+email_prefix+'@gmail.com'
        cy.get('#Email').type(email_Id)
        cy.get('#Password').type('mypassword123')
        cy.get('#ConfirmPassword').type('mypassword123')

        // save register button action
        cy.get('#register-button').click()

        // assert registered email id
        cy.get('.header-links > ul > :nth-child(1) > .account').should('be.text', email_Id)
    })
    it('my second test case', function () {
        // print log
        cy.log("my second test case")

    })
})