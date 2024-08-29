class FindChangePayment {
  // Найти платёж
  findPayment(text){
    cy.get('.input__content').type(text).type('{enter}').type('{enter}')
    cy.wait(1000)
    let isPaymentHere = false
    cy.get('.table__record span').each(($el) => {
      if ($el.text() == text){
        isPaymentHere = true
      }
    }).then(() => {
      assert(isPaymentHere, 'Find payment in table')
    })
  }

  // Открыть платёж по надписи в описании и проверить, то это подходящий
  openPayment(text){
    cy.get('tbody span')
      .contains(text)
      .each(($el) => {
        if (cy.wrap($el).invoke('text').then((inner_text) => {
              cy.expect(inner_text.trim())
              .to.equal(text)})) {
                cy.wrap($el)
                  .parents('.table__record')
                  .click()
        }
      })

    cy.get('.typography--type-heading')
      .should('contain','Редактировать платёж')
    cy.get('[data-field-name="description"] .input__input')
      .invoke('val')
      .should('equal', text)
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
