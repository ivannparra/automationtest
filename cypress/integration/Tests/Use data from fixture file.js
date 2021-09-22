/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//lines above makes vscode to show the commands from the related plugins

import { each } from "bluebird"
import 'cypress-iframe'




describe("ExampleTestSuite", () => {

    beforeEach(function() {        
        cy.fixture('testData').then(function(data) {
           this.data = data                     
        })        
      })
 
 // Use Export file to get data from fixture files
    it("Import data from fixtures files", function () {
       cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
       cy.get('#autocomplete').type(this.data.name)
    })
})
