

describe("Assertions", () =>{
 it("Implicit assertions", () =>{

 cy.visit("https://fe-dev-buzzhr.developersorcalo.com/")       //Implicit assertions = should and 
 
 cy.url().should('include','fe-dev-buzzhr')
 cy.url().should('eq','https://fe-dev-buzzhr.developersorcalo.com/')
 cy.url().should('contain','buzzhr')
 
 cy.url().should('include','fe-dev-buzzhr.developersorcalo.com/')
 .should('eq','https://fe-dev-buzzhr.developersorcalo.com/')
 .should('contain','buzzhr')

 cy.url().should('include','fe-dev-buzzhr.developersorcalo.com/')
 .and('eq','https://fe-dev-buzzhr.developersorcalo.com/')
 .and('contain','buzzhr')


 cy.url().should('include','fe-dev-buzzhr.developersorcalo.com/')
 .and('eq','https://fe-dev-buzzhr.developersorcalo.com/')
 .and('not.contain','buzzhrlive')

 cy.get('#email').type('admin01@ceative.co.uk')
    
 cy.get('#password').type('Orcalo@123')
 
 cy.get('.btn').click()

 
 

 

})

})