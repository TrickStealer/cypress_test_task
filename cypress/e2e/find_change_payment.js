class FindChangePayment {
  // Найти платёж
  findPayment(text){
    cy.get('.input__content').type(text).type('{enter}').type('{enter}')
    cy.contains(text).should('be.visible')
  }

  // Открыть платёж и проврить, что это подходящий
  openPayment(text){
    cy.contains(text).click()
    cy.get('[data-field-name="description"] .input__input')
      .invoke('val')
      .should('eq', text)
  }
}

export default FindChangePayment
