describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/')

    cy.get('[type="email"]').type('admin@admin.ad')
    cy.get('[type="password"]').type('admin')
    cy.get('.button__content').click()

  })
})
