import FillPayment from './fill_payment'
import FindChangePayment from './find_change_payment'

describe('Payment adding positive testing', () => {
  const fill = new FillPayment()
  const find = new FindChangePayment()

  beforeEach('Sign in', () => {
    cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/')
    cy.viewport(1920, 1080)
    cy.location('protocol').should('eq', 'https:')


    cy.get('[type="email"]').type('admin@admin.ad')
    cy.get('[type="password"]').type('admin')
    cy.get('.button__content').click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')
  })

  it('Payment adding test 1', () => {
    // fill.openForm()                             // Открыть форму добавления платежа
    //
    // fill.operationType_Income()                 // Тип операции:	Доход/приход
    // fill.description('Тест 999')                // Описание:	Тест 1
    // fill.statusActive()                         // Статус:	Активен
    // fill.statusChecked()                        // Статус:	Проверен
    //
    // fill.amountPlan(2000)                       // Сумма план:	2000
    // fill.amountFact(2000)                       // Сумма факт:	2000
    // fill.paymentStatus_NotPayed()               // Статус оплаты:	Не оплачен
    //
    // fill.datePlan()                             // Дата план:	[Дата тестирования]
    // fill.dateFact()                             // Дата факт:	[Дата тестирования]
    //
    // fill.source('Источник 1')                   // Источник:	Источник 1
    // fill.sourceAdditional('Источник 1')         // Источник:	Источник 1
    // fill.documentsStatus('Акт подписан')        // Статус документов:	Счёт выставлен
    //
    // fill.companyOwn('ИП Иванов Иван Иванович')  // Юридическое лицо:	ИП Иванов Иван Иванович
    // fill.companyClient('Контрагент 1')          // Контрагент:	Контрагент 1
    // fill.accountSender('Счет отправителя 1')    // Счет отправителя:	Счет отправителя 1
    // fill.accountRecipient('Счет получателя 1')  // Счет получателя:	Счет получателя 1
    //
    // fill.tags(1)                                // Тэги:	Тэг 1
    // fill.bankID()                               // ID в банке	[Автоматически заполняется]
    //
    // fill.addPaymentToTable()                    // Нажать кнопку "Добавить"
    // fill.closeForm()                            // Вернуться на страницу "Платежи"

    find.findPayment('Тест 999')  // Найти созданный платёж
    find.openPayment('Тест 999')

    // cy.contains('Тест 1').click()
    // cy.get('[data-field-name="operation"] .radio-group__checkbox--first .checkbox__icon')
    //   .should('have.class', 'checkbox__icon--checked')

    cy.wait(10000)

  })

  // it('Payment adding test 2', () => {
  //   cy.get('[data-field-name="description"] .form-field').type('Test 2')
  // })
})
