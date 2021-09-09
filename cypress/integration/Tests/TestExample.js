/// <reference types="Cypress" />

describe("ExampleTestSuite", () => {
it("testOne", () => {
cy.visit('https://saucedemo.com/')
cy.get('#user-name').type('standard_user')
cy.get('#password').type('secret_sauce')
cy.get('#login-button').click()
cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
})  
//it("testTwo", () =>{
//
//})  
})