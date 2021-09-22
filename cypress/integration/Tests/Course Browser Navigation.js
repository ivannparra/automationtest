/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//lines above makes vscode to show the commands from the related plugins

import { each } from "bluebird"
import 'cypress-iframe'
import HomePage from "../Tests/pageObjects/HomePage" //Import the page object

describe("ExampleTestSuite", () => {
// Navigate back and forward

    beforeEach(function() {
        cy.fixture('testData').then(function(data) {
            this.data = data
        })        
    })

    it("Browser navigation back and forward, and validate url", function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit('https://rahulshettyacademy.com/#/index')
        cy.go('back')
        cy.go('forward')
        cy.url().should('include','https://rahulshettyacademy.com/#/index')   
    })  

//Handle iFrames
    it('Handle iFrame', function ()  {    //Install Cypress plugin to handle iFrames npm install -D cypress-iframe and import to this file import cypress-iframe
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')//Load desired iFrame
        cy.wait(1000)
        cy.iframe().find("a[href*='mentorship']").eq(0).click()//cy.iframe() to interact within iframe and href*= for loading all elements with href starting with mentorship
        cy.iframe().find('.pricing-title').eq(0).then(function(el) {
            const elText = el.text()
            expect(elText).equal('BRONZE')
            // another way to check BRONZE by class attribute value
        cy.iframe().find('h1[class*="pricing-title"]').eq(0).should('have.text','BRONZE')
        })    
    })

// Cypress common function from support js
    it('Adding multiple products to the cart', function () {
        const homePage = new HomePage() //initialize the object                     
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        homePage.getShopButton().click()  //use the object      
        this.data.productName.forEach(function(productNameData) {  
            cy.addProduct(productNameData)
        })        
    })   


// Cypress override configuration for particular test case
    it('Override config', function () {
        const homePage = new HomePage()                
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        homePage.getShopButton().click()
        Cypress.config('pageLoadTimeout', 100000)   //Overrides the config, used when you know in particular test you have to wait more than expected 
        this.data.productName.forEach(function(productNameData) {  
            cy.addProduct(productNameData)
        })        
    })   


})





    





    