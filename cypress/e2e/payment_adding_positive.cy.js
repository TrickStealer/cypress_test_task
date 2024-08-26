import FillPayment from './fill_payment'

describe('Payment adding positive testing', () => {
  const fillPayment = new FillPayment()

  beforeEach('Sign in', () => {
    cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/')
    cy.viewport(1920, 1080)
    cy.location('protocol').should('eq', 'https:')


    cy.get('[type="email"]').type('admin@admin.ad')
    cy.get('[type="password"]').type('admin')
    cy.get('.button__content').click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')

    cy.get('.pageLayout__actions .button__content').click()
    cy.get('.typography--type-heading').should('contain', 'Добавить платёж')
  })

  it('Payment adding test 1', () => {
    fillPayment.operationTypeIncome()
    fillPayment.operationTypeExpense()


    // cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
    //   .next()
    //   .children('.form-field__field')
    //   .children('.checkbox--no-appearance')
    //   .children('.checkbox__content')
    //   .children('.checkbox__icon')
    //   .click()

      // cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
      //   .next()
      //   .find('.checkbox__icon')
      //   .click()


    // // Тип операции	Доход/приход
    // cy.get('[data-field-name="operation"] .radio-group__checkbox--first .checkbox__icon')
    //   .should('have.class', 'checkbox__icon--checked')
    //
    // // Описание	Тест 1
    // cy.get('[data-field-name="description"] .form-field').type('Тест 1')
    //
    // // Статус	Активен, проверен
    // cy.get('[data-field-name="statuses"] .radio-group__checkbox--first .checkbox__icon')
    //   .click()
    // cy.get('[data-field-name="statuses"] .radio-group__checkbox--first .checkbox__icon')
    //   .should('have.class', 'checkbox__icon--checked')
    // cy.get('[data-field-name="statuses"] .radio-group__checkbox--last .checkbox__icon')
    //   .click()
    // cy.get('[data-field-name="statuses"] .radio-group__checkbox--last .checkbox__icon')
    //    .should('have.class', 'checkbox__icon--checked')
    //
    // // Сумма план	2000
    // cy.get('[data-field-name="amount_plan"] .input__input').type('2000')
    //
    // // Сумма факт	2000
    // cy.get('[data-field-name="amount_fact"] .input__input').type('2000')
    //
    // // Статус оплаты	Не оплачен
    // cy.get('[data-field-name="status"] .radio-group__checkbox--first .checkbox__icon')
    //   .click()
    // cy.get('[data-field-name="status"] .radio-group__checkbox--first .checkbox__icon')
    //   .should('have.class', 'checkbox__icon--checked')
    //
    // // Дата план	[Дата тестирования]
    // cy.get('[data-field-name="date_plan"] .date__input').click()
    // cy.get('.dp-today').click()
    //
    // // Дата факт	[Дата тестирования]
    // cy.get('[data-field-name="date_fact"] .date__input').click()
    // cy.get('.dp-today').click()
    //
    // // Источник	Источник 1
    // cy.get('[data-field-name="source"] .multiselect__placeholder').click()
    // cy.get('[data-field-name="source"] .multiselect__input')
    //   .type('Источник 1')
    //   .type('{enter}')
    //
    // // Источник уточнение	Источник 1
    // cy.get('[data-field-name="source_additional_id"] .input__input')
    //   .type('Источник 1')
    //
    // // Статус документов	Счёт выставлен
    // cy.get('[data-field-name="source_status"] .icon').click()
    // cy.get('[data-field-name="source_status"] .multiselect__option')
    //   .contains('Счет выставлен')
    //   .click()
    //
    // // Юридическое лицо	ИП Иванов Иван Иванович
    // cy.get('[data-field-name="company_own"] .multiselect__placeholder').click()
    // cy.get('[data-field-name="company_own"] .multiselect__input')
    //   .type('ИП Иванов Иван Иванович')
    //   .type('{enter}')
    //
    // // Контрагент	Контрагент 1
    // cy.get('[data-field-name="company_client"] .multiselect__placeholder')
    //   .click()
    // cy.get('[data-field-name="company_client"] .multiselect__input')
    //   .type('Контрагент 1')
    //   .type('{enter}')
    //
    // // Счет отправителя	Счет отправителя 1
    // cy.get('[data-field-name="account_sender"] .multiselect__placeholder')
    //   .click()
    // cy.get('[data-field-name="account_sender"] .multiselect__input')
    //   .type('Счет отправителя 1')
    //   .type('{enter}')
    //
    // // Счет получателя	Счет получателя 1
    // cy.get('[data-field-name="account_recipient"] .multiselect__placeholder')
    //   .click()
    // cy.get('[data-field-name="account_recipient"] .multiselect__input')
    //   .type('Счет получателя 1')
    //   .type('{enter}')
    //
    // // Тэги	Тэг 1
    // cy.get('[data-field-name="tags"] .multiselect__placeholder')
    //   .click()
    // cy.get('[data-field-name="tags"] .multiselect__input')
    //   .type('Тэг 1')
    //   .type('{enter}')
    //
    // // ID в банке	[Автоматически заполняется]
    // cy.get('[data-field-name="external_source_id"] .input__input')
    //   .should('be.disabled')
    //
    //
    // // Нажать кнопку "Добавить"
    // cy.get('.button--state-filled').click()

    // cy.get('.breadcrumb').contains('Платежи').parent().click()
    // // cy.wait(100)
    // cy.get('.typography--type-heading').should('contain', 'Платежи')
    // // cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/payments/')
    // cy.get('.input__content').type('Тест 1').type('{enter}').type('{enter}')
    // cy.contains('Тест 1').click()
    // cy.get('[data-field-name="operation"] .radio-group__checkbox--first .checkbox__icon')
    //   .should('have.class', 'checkbox__icon--checked')





    //Открыть таблицу и ввести в поле поиска "Тест 1"
    cy.wait(10000)

  })

  // it('Payment adding test 2', () => {
  //   cy.get('[data-field-name="description"] .form-field').type('Test 2')
  // })
})
