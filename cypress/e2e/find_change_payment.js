class FindChangePayment {
  // Найти платёж
  findPayment(text){
    cy.get('.input__content').type(text).type('{enter}').type('{enter}')
    cy.contains(text).should('be.visible')
  }
}

export default FindChangePayment
