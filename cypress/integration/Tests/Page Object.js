/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//lines above makes vscode to show the commands from the related plugins

import { each } from "bluebird"
import 'cypress-iframe'
import HomePage from '../Tests/pageObjects/HomePage'

describe("ExampleTestSuite", () => {
// Navigate back and forward

    beforeEach(function() {
        cy.fixture('testData').then(function(data) {
            this.data = data
        })
    })

    it("Using page objects", function () {
        getWebsite()        
    })
})







    





    