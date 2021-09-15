/// <reference types="Cypress" />

import { each } from "bluebird"

describe("ExampleTestSuite", () => {
    it("Checkbox", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkbox-example').find('input[type="checkbox"]').as('checkboxes') // .as to later on reuse an element in a cy.get('@element')
        cy.get('@checkboxes').check(['option2']) //Check an element .check(['value']) 
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
    it("Checkbox", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1') // Check for a value in a field .should('have.value, "value"')
    })


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

    it("Remove attribute to navigate in the same page instead of a new tab", () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#opentab').invoke('removeAttr', 'target').click() // .invoke to execute a jQuery method over the element ('removeAttr')
    })
})