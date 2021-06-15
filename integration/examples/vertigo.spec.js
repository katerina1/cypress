describe('Invalid login action', () => {

    it('should fail login on wrong credentials', () => {
  
      cy.visit('https://dev-trackimpact.org/')
      //cy.wait(1000)
      cy.get('button').contains('Login').click()
      cy.wait(3000)
      cy.get('#inputEmail').type('fake@email.com').should('have.value', 'fake@email.com')
      cy.get('#inputPassword').type('fakepassword').should('have.value', 'fakepassword')
      cy.get('button').contains(' Sign in ').click('')
  
      cy.get('.alert-danger').should('contain', 'Incorrect username or password.')
      
      cy.screenshot('Capturing screenshot after successful execution under screenshots dir')

    })
})