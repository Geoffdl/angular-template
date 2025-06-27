describe('App E2E', () => {
  it('should display welcome message', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.get('h1').should('contain.text', 'Welcome')
  })
}) 