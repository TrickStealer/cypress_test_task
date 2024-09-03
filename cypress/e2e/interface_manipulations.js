class InterfaceManipulations{
  // Открыть форму добавления платежа
  openForm(){
    cy.get('.typography--type-heading').should('contain','Платежи')
    cy.get('.pageLayout__actions .button__content').click()
    cy.get('.typography--type-heading').should('contain', 'Добавить платёж')
  }

  // Нажать кнопку "Добавить"
  addPaymentToTable(){
    cy.get('.typography--type-heading').should('contain', 'Добавить платёж')
    cy.get('.button--state-filled').click()
  }

  // Вернуться на страницу "Платежи"
  closeForm(){
    cy.get('.typography--type-heading').should('contain', 'Добавить платёж')
    cy.get('.breadcrumb').contains('Платежи').parent().click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')
  }

  // Найти платёж в таблице
  findPayment(text){
    cy.get('.typography--type-heading').should('contain','Платежи')

    let isPaymentHere = false
    cy.get('.input__content')
      .type(text)
      .type('{enter}')
      .type('{enter}') // Временный костыль, чтобы тесты не падали из-за бага
      // Поиск запускается только после двух нажатий Enter

    cy.wait(1000) // Чтобы страница успела прогрузиться
    cy.get('.table__record span').each(($el) => {
        if ($el.text() == text){
          isPaymentHere = true
        }
      }).then(() => {
        assert(isPaymentHere, 'Find payment in table')
      })
  }

  // Найти платёж в таблице
  findPaymentForDeletion(text){
    cy.get('.typography--type-heading').should('contain','Платежи')

    let isPaymentHere = false
    cy.get('.input__content')
      .type(text)
      .type('{enter}')
      .type('{enter}') // Временный костыль, чтобы тесты не падали из-за бага
      // Поиск запускается только после двух нажатий Enter

    cy.wait(1000) // Чтобы страница успела прогрузиться

    cy.document().then(doc => {
      const element = doc.querySelector('.table__record span');
      if (!!element){
        cy.get('.table__record span').each(($el) => {
            if ($el.text() == text){
              isPaymentHere = true
            }
          }).then(() => {
            if (isPaymentHere){
              this.openPayment(text)
              this.deletePayment()
              cy.log('Payment "' + text + '" deleted')
            }
            else{
              cy.log('Payment "' + text + '" is already absent')
            }
          })
      }
      else {
        cy.log('Payment "' + text + '" is already absent')
      }
    })
  }

  // Открыть платёж по надписи в описании и проверить, то это подходящий
  openPayment(text){
    cy.get('.typography--type-heading').should('contain','Платежи')
    cy.get('.table__record span')
      .each(($el) => {
        if ($el.text() == text){
          cy.wrap($el).click()
          return false
        }
      })

    cy.get('.typography--type-heading').should('contain','Редактировать платёж')
  }

  // Удалить открытый платёж
  deletePayment(){
    cy.get('.typography--type-heading').should('contain','Редактировать платёж')
    cy.contains('Удалить').click()
    cy.get('.swal2-confirm').click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')
  }
}

export default InterfaceManipulations
