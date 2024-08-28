class VisitLoginSite {
  // Открытие сайта, проверка, что протокол https
  site(address){
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

  // Авторизация на сайте, используя данные из json-файла
  loginFromJson(json_file){
    cy.fixture(json_file).then((user) => {
      this.login(user.email, user.password)
    })
  }
}

export default VisitLoginSite
