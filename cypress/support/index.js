// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import HomePage from '../integration/Tests/pageObjects/HomePage'

Cypress.Commands.add('loginSauce', (user, password) => {
    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('addProduct', (productName) => {
    const homePage = new HomePage()
    homePage.getItemCards().each(($el, index, $list) => {
        let product = $el.text()
        cy.log()
        if(product.includes(productName)) {
            homePage.getItemCardFooter().eq(index).click()            
        }
    })    
})
