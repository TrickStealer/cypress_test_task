class FindChangePayment {
  // Найти платёж
  findPayment(text){
    cy.get('.input__content').type(text).type('{enter}').type('{enter}')
    cy.get('span').contains(text).should('be.visible')
  }

  // Открыть платёж и проврить, что это подходящий
  openPayment(text){
    cy.get('span').contains(text).parents('.table__record').click()
    cy.get('.typography--type-heading')
      .should('contain','Редактировать платёж')
    cy.get('[data-field-name="description"] .input__input')
      .invoke('val')
      .should('eq', text)
  }

  // Удалить открытый платёж
  deletePayment(){
    cy.get('.typography--type-heading')
      .should('contain','Редактировать платёж')
    cy.contains('Удалить').click()
    cy.get('.swal2-confirm').click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')
  }
}

export default FindChangePayment
