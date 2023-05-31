describe ("BuzzHR Login", () => {

    it('Login', () => {
    
        cy.visit("https://buzzhr.co.uk/auth/signin")
        //cy.get('.login-modal').click()
    
    cy.get('#email').type('admin01@ceative.co.uk')
    
    cy.get('#password').type('Orcalo@123')
    
    cy.get('.btn').click()
    //cy.title().should('include','Get Started')
    
        
    
    })
    
})      