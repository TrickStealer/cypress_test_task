class VisitLoginSite {
  // Открыть сайт c указанным пресетом/размерами окна
  // Проверка, что протокол https
  site(address, size){
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1])
    } else {
      cy.viewport(size)
    }
    cy.visit(address)
    cy.location('protocol').should('eq', 'https:')
  }

  // Авторизация на сайте
  login(email, password){
    cy.get('[type="email"]').type(email).should('have.value', email)
    cy.get('[type="password"]').type(password).should('have.value', password)
    cy.get('.button__content').click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')
  }
}

export default VisitLoginSite
