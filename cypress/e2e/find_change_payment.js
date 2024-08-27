class FindChangePayment {
  // Найти платёж
  findPayment(text){
    cy.get('.input__content').type(text).type('{enter}').type('{enter}')
    cy.contains(text).should('be.visible')
  }

  // Открыть платёж
  openPayment(text){
    cy.contains(text).click()
    cy.get('[data-field-name="description"] .form-field').invoke('text').should('include', 'Тест 999')


    // cy.get('[data-field-name="description"] .form-field').focus()
    // cy.focused().invoke('val').should('include', text);


    // cy.get('[data-field-name="description"] .form-field').invoke('text').should('include', 'Тест 999')
      // .should('have.value', text)

    // cy.window().then((win) => {
    //   // Проверяем, что текст присутствует в переменной JavaScript
    //   expect(win.someJavaScriptVariable).to.include('Тест 999');
    // });
  }
}

export default FindChangePayment
