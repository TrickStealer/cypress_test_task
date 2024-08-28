// Получение текущей даты
function currentDate(){
  let current_date = new Date();
  const day = current_date.getDate()
  const day_string = day < 10 ? '0' + day : day

  const month = current_date.getMonth() + 1
  const month_string = month < 10 ? '0' + month : month

  const year = current_date.getFullYear()
  const result_string = day + '.' + month_string + '.' + year
  return result_string
}

const CURRENT_DATE = currentDate()


class FillPayment {
  // Открыть форму добавления платежа
  openForm(){
    cy.get('.pageLayout__actions .button__content').click()
    cy.get('.typography--type-heading').should('contain', 'Добавить платёж')
  }

  // Тип операции "Доход/приход"
  operationType_Income() {
    cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
      .find('.checkbox__label')
      .should('contain', 'Доход/приход')
      .prev()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Тип операции "Расход"
  operationType_Expense() {
    cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
      .next()
      .find('.checkbox__label')
      .should('contain', 'Расход')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Тип операции "Перевод средств"
  operationType_Transfer() {
    cy.get('[data-field-name="operation"] .radio-group__checkbox--last')
      .find('.checkbox__label')
      .should('contain', 'Перевод средств')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Описание
  description(text) {
    cy.get('[data-field-name="description"] .form-field')
      .type(text)
    cy.get('[data-field-name="description"] .input__input')
      .invoke('val')
      .should('eq', text)
  }

  // Статус "Активен"
  statusActive(active) {
    cy.get('[data-field-name="statuses"] .radio-group__checkbox--first .checkbox__label')
      .should('contain', 'Активен')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Статус "Проверен"
  statusChecked() {
    cy.get('[data-field-name="statuses"] .radio-group__checkbox--last .checkbox__label')
      .should('contain', 'Проверен')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Сумма план
  amountPlan(amount) {
    cy.get('[data-field-name="amount_plan"] .input__input')
      .type(amount)
      .should('have.value', amount)
  }

  // Сумма факт
  amountFact(amount) {
    cy.get('[data-field-name="amount_fact"] .input__input')
      .type(amount)
      .should('have.value', amount)
  }

  // Статус оплаты "Не оплачен"
  paymentStatus_NotPayed(){
    cy.get('[data-field-name="status"] .radio-group__checkbox--first .checkbox__label')
      .should('contain', 'Не оплачен')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Статус оплаты "Оплачен"
  paymentStatus_Payed(){
    cy.get('[data-field-name="status"] .radio-group__checkbox--first')
      .next()
      .find('.checkbox__label')
      .should('contain', 'Оплачен')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Статус оплаты "Частично оплачен"
  paymentStatus_PartlyPayed(){
    cy.get('[data-field-name="status"] .radio-group__checkbox--last .checkbox__label')
      .should('contain', 'Частично оплачен')
      .prev()
      .click()
      .should('have.class', 'checkbox__icon--checked')
  }

  // Дата план (пока можно ставить только сегодняшнюю дату)
  datePlan(){
    cy.get('[data-field-name="date_plan"] .date__input')
      .click()
    cy.get('.dp-today')
      .click()
    cy.get('[data-field-name="date_plan"] .date__input')
      .should('have.value', CURRENT_DATE)
  }

  // Дата факт (пока можно ставить только сегодняшнюю дату)
  dateFact(){
    cy.get('[data-field-name="date_fact"] .date__input')
      .click()
    cy.get('.dp-today')
      .click()
    cy.get('[data-field-name="date_plan"] .date__input')
      .should('have.value', CURRENT_DATE)
  }

  // Источник
  source(text){
    cy.get('[data-field-name="source"] .multiselect__placeholder')
      .click()
    cy.get('[data-field-name="source"] .multiselect__input')
      .type(text)
    cy.get('[data-field-name="source"] .multiselect__option')
      .contains(text)
      .click()
    cy.get('[data-field-name="source"] .multiselect__single')
      .should('contain', text)
  }

  // Источник уточнение
  sourceAdditional(text){
    cy.get('[data-field-name="source_additional_id"] .input__input')
      .type(text)
      .invoke('val')
      .should('eq', text)
  }

  // Статус документов. Варианты переменной text:
    // Счет выставлен
    // Счет отправлен
    // Акт отправлен
    // Акт подписан
  documentsStatus(text){
    if (text == 'Счет выставлен' ||
        text == 'Счет отправлен' ||
        text == 'Акт отправлен'  ||
        text == 'Акт подписан') {
          cy.get('[data-field-name="source_status"] .icon')
            .click()
          cy.get('[data-field-name="source_status"] .multiselect__option')
            .contains(text)
            .click()
          cy.get('[data-field-name="source_status"] .multiselect__single')
            .should('contain', text)
    }
    else {
      assert(false, 'Incorrect input in FillPayment.documentsStatus(status)')
    }
  }

  // Юридическое лицо
  companyOwn(text){
    cy.get('[data-field-name="company_own"] .multiselect__placeholder')
      .click()
    cy.get('[data-field-name="company_own"] .multiselect__input')
      .type(text)
    cy.get('[data-field-name="company_own"] .multiselect__option')
      .contains(text)
      .click()
    cy.get('[data-field-name="company_own"] .multiselect__single')
      .should('contain', text)
  }

  // Контрагент
  companyClient(text){
    cy.get('[data-field-name="company_client"] .multiselect__placeholder')
      .click()
    cy.get('[data-field-name="company_client"] .multiselect__input')
      .type(text)
    cy.get('[data-field-name="company_client"] .multiselect__option')
      .contains(text)
      .click()
    cy.get('[data-field-name="company_client"] .multiselect__single')
      .should('contain', text)
  }

  // Счет отправителя
  accountSender(text){
    cy.get('[data-field-name="account_sender"] .multiselect__placeholder')
      .click()
    cy.get('[data-field-name="account_sender"] .multiselect__input')
      .type(text)
    cy.get('[data-field-name="account_sender"] .multiselect__option')
      .contains(text)
      .click()
    cy.get('[data-field-name="account_sender"] .multiselect__single')
      .should('contain', text)
  }

  // Счет получателя
  accountRecipient(text){
    cy.get('[data-field-name="account_recipient"] .multiselect__placeholder')
      .click()
    cy.get('[data-field-name="account_recipient"] .multiselect__input')
      .type(text)
    cy.get('[data-field-name="account_recipient"] .multiselect__option')
      .contains(text)
      .click()
    cy.get('[data-field-name="account_recipient"] .multiselect__single')
      .should('contain', text)
  }

  // Тэги
  tags(number){
    const tag = 'Тэг '
    for (let i = 1; i <= number; i++) {
      cy.get('[data-field-name="tags"] .multiselect__tags')
        .click()
      cy.get('[data-field-name="tags"] .multiselect__input')
        .type(tag + i)
        .type('{enter}')
      cy.get('[data-field-name="tags"] .multiselect__tag')
        .children()
        .should('contain', tag + i)
    }
  }

  // ID в банке
  bankID(){
    cy.get('[data-field-name="external_source_id"] .input__input')
      .should('be.disabled')
  }

  // Нажать кнопку "Добавить"
  addPaymentToTable(){
    cy.get('.button--state-filled').click()
  }

  // Вернуться на страницу "Платежи"
  closeForm(){
    cy.get('.breadcrumb').contains('Платежи').parent().click()
    cy.get('.typography--type-heading').should('contain', 'Платежи')
  }
}

export default FillPayment
