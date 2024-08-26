class FillPayment {
  operationTypeIncome() {
    return cy.get('[data-field-name="operation"] .radio-group__checkbox--first .checkbox__icon')
        .should('have.class', 'checkbox__icon--checked')
      }
  operationTypeExpense(){
    return cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
      .next()
      .find('.checkbox__icon')
      .click()
      .should('have.class', 'checkbox__icon--checked')
    }
}

export default FillPayment
