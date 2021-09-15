/// <reference types="Cypress" />

describe("ExampleTestSuite", () => {
    it("Successfull login", () => {
        cy.visit('https://saucedemo.com/')
        cy.loginSauce('standard_user', 'secret_sauce')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    }) 

    it("Add a product to the basket", () => {
        cy.visit('https://saucedemo.com/')
        cy.loginSauce('standard_user', 'secret_sauce')
        cy.get('#inventory_container .inventory_item').each(($el, index, $list) => {
            const itemText = $el.find('.inventory_item_name').text() // getting text title from items
            if (itemText.includes('Sauce Labs Fleece Jacket')) {
            cy.wrap($el).find('button').click()
            }
        })        
    })  
})

it("Add and remove a product from the basket", () => {
    cy.visit('https://saucedemo.com/')
    cy.loginSauce('standard_user', 'secret_sauce')
    cy.get('#inventory_container .inventory_item').each(($el, index, $list) => {
    const itemText = $el.find('.inventory_item_name').text() // getting text title from items       
    if (itemText.includes('Sauce Labs Fleece Jacket')) {
        cy.wrap($el).find('button').click()
        }
        })  
    cy.get('#shopping_cart_container').click()
    cy.get('.item_pricebar button').click() // click in the remove button
    cy.get('.cart_list .removed_cart_item').should('have.lengthOf',1)  //confirm one item was deleted  
})

it("Test", () => {
    cy.visit('https://saucedemo.com/')
    cy.loginSauce('standard_user', 'secret_sauce')
    cy.get('#inventory_container .inventory_item').each(($el, index, $list) => {
        const itemText = $el.find('.inventory_item_name').text() // getting text title from items
        if (itemText.includes('Sauce Labs Fleece Jacket')) {
            cy.wrap($el).find('button').click()
        }        
        })  
    cy.get('#shopping_cart_container').click()
    cy.get('.item_pricebar button').click() // click in the remove button
    cy.get('.cart_list .removed_cart_item').should('have.lengthOf',1)  //confirm one item was deleted  
})

it("Test", () => {
    cy.on('window:alert', (str) => {
       expect(str).to.equal('Hello , share this practice page and share your knowledge')
    }) 
})