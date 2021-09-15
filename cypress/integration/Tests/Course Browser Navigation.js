/// <reference types="Cypress" />

import { each } from "bluebird"

describe("ExampleTestSuite", () => {
    it("Browser navigation back and forward, and validate url", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit('https://rahulshettyacademy.com/#/index')
        cy.go('back')
        cy.go('forward')
        cy.url().should('include','https://rahulshettyacademy.com/#/index')   
     })    
 })


    