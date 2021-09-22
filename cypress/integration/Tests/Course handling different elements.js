/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//lines above makes vscode to show the commands from the related plugins

import { each } from "bluebird"
import 'cypress-iframe'
import homePage from '../Tests/pageObjects/homePage'

describe("ExampleTestSuite", () => {
 
 //Handle Checkboxes
    it("Checkbox", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') // Any next cy.visit() won't work in other domains than the current one
        cy.get('#checkbox-example').find('input[type="checkbox"]').as('checkboxes') // .as to later on reuse an element in a cy.get('@element')
        cy.get('@checkboxes').check(['option2']) //Check an element from a checkbox .check(['value']) 
        cy.get('#checkbox-example').find('label').each(($el, index, $list) => { //iterate through a list of elements, in this case 'label'
          let elementTest = $el.text()     
          cy.log(elementTest)

          if (elementTest === " Option2 " ){
            cy.wrap($el).find('input').should('be.checked') //status of the check to "be.checked"
        }else{                                              //It's needed to wrap $el element to continue operating with it
            cy.wrap($el).find('input').should('not.be.checked')  //status of the check to "be.not.selected"

         }
        })
    })

//Handle Selects

    it("Selects", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1') // Asses for a value in a field .should('have.value, "value"')
    })

//Handle Dyanamic Autocomplete

    it("Dynamyc autocomplete", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#select-class-example input').type('IND') //#ID get element by id .type('text')
        cy.get('#ui-id-1 li').as('autocompleteOptions')
        cy.get('@autocompleteOptions').each(($el, index, $list) => {
            const autoCompleteOpt = $el.text()
            if(autoCompleteOpt == "India") {
            cy.wrap($el).click()
            }
        })
        cy.get('#select-class-example #autocomplete').should('have.value', 'India')
    })

//Handle Browser Events

    it("Handle browser events alerts 'window:alert'", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }) 
    })   


    it("Handle browser events confirmations ''window:confirm", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })    


    it("Handle browser events cancelation", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?') // compare an expected string with a real string
        false
        })     
    })

//Handle open in a new tab/widnow by using jQuery functions to remove attributes from element
    //Cypress can't handle new tabs, therefore we remove the "target" attribute from the element before clicking

    it("Remove attribute to navigate in the same page instead of a new tab", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#opentab').invoke('removeAttr', 'target').click() // .invoke to execute a jQuery method over the element ('removeAttr')
    })

//Handle a web table

it ("Test web table", () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#product').eq(0).find('tr td:nth-child(2)').as('secondColumn').each(($el, index, $list) => { //td is the columb
        
        const elText = $el.text()
        if(elText.includes("Learn JMETER from Scratch")) {
            cy.get('@secondColumn').eq(index).next().then(function(price){  //next method moves to the next sibling
            const priceText =   price.text()
            expect(priceText).to.equal('25')
            })
        }
    })
})

// Handle Mouse Over click with jQuery show method
    it('Handle Mouse Over  jQuery', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')  //show is a jQuery method that display hidden elements in #mousehover element, show will only display inmediate children that are not visible
        cy.contains('Top').click()
        cy.url().should('include','top')
    })     


//Handle mouse Over click with Cypress 

    it('Handle Mouse Over Cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover')  
        cy.contains('Top').click({force: true}) //Cypress will click the element even though it's hidden (display:none)
        cy.url().should('include','top')
    })     


//Handle open in a new tab/widnow by using the href attribute of the button to be clicked in a cy.visit()    
    it('Handle Mouse Over  jQuery', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el) {
            const url = el.prop('href') //get value of the href prop
            cy.visit(url)
        })       
    })  

//Handle attributes and check their vlaue
    it('Attribute check', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#radio-btn-example').find('input[name=radioButton]').eq(0).should('have.attr','value','radio1')  //check attribute value = radio1 
        })    


//Handle attributes and check their vlaue

it('Adding multiple products to the cart', () => {
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
    cy.get('.nav-link').contains('Shop').click

    })
})