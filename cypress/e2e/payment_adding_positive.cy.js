describe('Payment adding positive testing', () => {
  beforeEach('Sign in', () => {
    cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/')
    cy.get('[type="email"]').type('admin@admin.ad')
    cy.get('[type="password"]').type('admin')
    cy.get('.button__content').click()
      cy.get('.pageLayout__actions .button__content').click()
  })

  it('Payment adding test 1', () => {
    cy.get('[data-field-name="description"] .form-field').type('Test 1')
  })

  it('Payment adding test 2', () => {
    cy.get('[data-field-name="description"] .form-field').type('Test 2')
  })
})
