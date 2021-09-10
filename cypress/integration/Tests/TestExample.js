/// <reference types="Cypress" />

describe("ExampleTestSuite", () => {
    it("Successfull login", () => {
        cy.visit('https://saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    }) 

    it("Add a product to the basket", () => {
        cy.visit('https://saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#inventory_container .inventory_item').each(($el, index, $list) => {
            const itemText = $el.find('.inventory_item_name').text() // getting text title from items
            if (itemText.includes('Sauce Labs Fleece Jacket')) {
            $el.find('button').click()
            }
        })        
    })  
})

it("Add and remove a product from the basket", () => {
    cy.visit('https://saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#inventory_container .inventory_item').each(($el, index, $list) => {
        const itemText = $el.find('.inventory_item_name').text() // getting text title from items
        if (itemText.includes('Sauce Labs Fleece Jacket')) {
        $el.find('button').click()
        }
    })  
    cy.get('#shopping_cart_container').click()
    cy.get('.item_pricebar button').click() // click in the remove button
    cy.get('.cart_list .removed_cart_item').should('have.lengthOf',1)  //confirm one item was deleted  
})  



