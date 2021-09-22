//Create methods to get elements of the desired page then import it in the test.js file

class HomePage {

getItemCards() {
    return cy.get('.card-title a')
    }
getItemCardFooter() {
    return cy.get('.card-footer button')
    }
getShopButton() {
    return cy.get('.nav-link').contains('Shop')
}
}


export default HomePage;

