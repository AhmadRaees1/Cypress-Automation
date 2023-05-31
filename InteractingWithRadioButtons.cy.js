  describe("BuzzHR Interacting With Radio Buttons", ()=>{
    it("login",()=>{
      cy.viewport(1440, 1000)
      cy.visit('https://fe-dev-buzzhr.developersorcalo.com/')
      cy.get('#email').type('admin01@ceative.co.uk')
      cy.get('#password').type('Orcalo@123')
      cy.get('.btn').click()

      cy. wait(2000);
      cy.get(':nth-child(10) > .MuiButtonBase-root > .nav-link-img').click();
      cy.get('[href="/settings/files"] > .MuiTypography-root').click();
      
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.simple-btn').click();
      cy. wait(2000);
      
      cy.get('.simple-btn.btn.undefined').click();
      cy.get(':nth-child(2) > input').click().type('Cypress Test')
    
      
      cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click().type('Cypress Test Description')
      cy.get('[type="submit"]').click();
      /* ==== End Cypress Studio ==== */
    })

  })