/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//lines above makes vscode to show the commands from the related plugins

import { each } from "bluebird"
import 'cypress-iframe'

describe("ExampleTestSuite", () => {

    it('Handle iFrame', () => {    //Install Cypress plugin to handle iFrames npm install -D cypress-iframe and import to this file import cypress-iframe
           
    })
})
     

before(() => {
    // root-level hook
    // runs once before all tests
  })
  
  beforeEach(() => {
    // root-level hook
    // runs before every test block
  })
  
  afterEach(() => {
    // runs after each test block
  })
  
  after(() => {
    // runs once all tests are done
  })
  
  describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
    })
  
    beforeEach(() => {
      // runs before each test in the block
    })
  
    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  })
  





    