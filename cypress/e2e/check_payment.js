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

class CheckPayment {
  // Найти платёж
  findPayment(text){
    let isPaymentHere = false
    cy.get('.input__content')
      .type(text)
      .type('{enter}')
      .type('{enter}') // Временный костыль, чтобы тесты не падали из-за бага
      // Поиск происходит только после двух нажатий Enter
    cy.wait(1000) // Чтобы страница успела прогрузиться
    cy.get('.table__record span')
      .each(($el) => {
        if ($el.text() == text){
          isPaymentHere = true
        }
      }).then(() => {
        assert(isPaymentHere, 'Find payment in table')
      })
  }

  // Открыть платёж по надписи в описании и проверить, то это подходящий
  openPayment(text){
    cy.get('.table__record span')
      .each(($el) => {
        if ($el.text() == text){
          cy.wrap($el).click()
          return false
        }
      })

    cy.get('.typography--type-heading')
      .should('contain','Редактировать платёж')

    this.description(text)
  }

  // Проврка типа операции
  operationType(text){
    if (text == "income"){
      cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
        .find('.checkbox__label')
        .should('contain', 'Доход/приход')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else if (text == "expense"){
      cy.get('[data-field-name="operation"] .radio-group__checkbox--first')
        .next()
        .find('.checkbox__label')
        .should('contain', 'Расход')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else if (text == "transfer"){
      cy.get('[data-field-name="operation"] .radio-group__checkbox--last')
        .find('.checkbox__label')
        .should('contain', 'Перевод средств')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else{
      assert(false, 'Incorrect input in CheckPayment.operationType()')
    }
  }

  // Проверка описания
  description(text){
    cy.get('[data-field-name="description"] .input__input')
      .invoke('val')
      .should('equal', text)
  }

  // Проверка статуса "Активен"
  statusActive(isActive) {
    if (isActive){
      cy.get('[data-field-name="statuses"] .radio-group__checkbox--first .checkbox__label')
        .should('contain', 'Активен')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else{
      cy.get('[data-field-name="statuses"] .radio-group__checkbox--first .checkbox__label')
        .should('contain', 'Активен')
        .prev()
        .should('not.have.class', 'checkbox__icon--checked')
    }
  }

  // Проверка статуса "Проверен"
  statusChecked(isChecked) {
    if (isChecked){
      cy.get('[data-field-name="statuses"] .radio-group__checkbox--last .checkbox__label')
        .should('contain', 'Проверен')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else{
      cy.get('[data-field-name="statuses"] .radio-group__checkbox--last .checkbox__label')
        .should('contain', 'Проверен')
        .prev()
        .should('not.have.class', 'checkbox__icon--checked')
    }
  }

  // Проверка суммы план
  amountPlan(amount){
    if (amount != "") {
      cy.get('[data-field-name="amount_plan"] .input__input')
        .should('have.value', amount + '.00')
    }
    else {
      cy.get('[data-field-name="amount_plan"] .input__input')
        .should('be.empty')
    }
  }

  // Проверка суммы факт
  amountFact(amount){
    if (amount != "") {
      cy.get('[data-field-name="amount_fact"] .input__input')
        .should('have.value', amount + '.00')
    }
    else {
      cy.get('[data-field-name="amount_fact"] .input__input')
        .should('be.empty')
    }
  }

  // Проверка статуса оплаты
  paymentStatus(status){
    if(status == "NotPayed"){
      cy.get('[data-field-name="status"] .radio-group__checkbox--first .checkbox__label')
        .should('contain', 'Не оплачен')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else if(status == "Payed"){
      cy.get('[data-field-name="status"] .radio-group__checkbox--first')
        .next()
        .find('.checkbox__label')
        .should('contain', 'Оплачен')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else if(status == "PartlyPayed"){
      cy.get('[data-field-name="status"] .radio-group__checkbox--last .checkbox__label')
        .should('contain', 'Частично оплачен')
        .prev()
        .should('have.class', 'checkbox__icon--checked')
    }
    else{
      assert(false, 'Incorrect input in CheckPayment.paymentStatus()')
    }
  }

  // Проверка даты план
  datePlan(text){
    if (text == "current"){
      cy.get('[data-field-name="date_plan"] .date__input')
        .should('have.value', CURRENT_DATE)
    }
    else{
      cy.get('[data-field-name="date_plan"] .date__input')
        .should('have.empty')
    }
  }

  // Проверка даты факт
  dateFact(text){
    if (text == "current"){
      cy.get('[data-field-name="date_fact"] .date__input')
        .should('have.value', CURRENT_DATE)
    }
    else{
      cy.get('[data-field-name="date_fact"] .date__input')
        .should('have.empty')
    }
  }

  // Источник
  source(text){
    this.multiselectField('[data-field-name="source"]', text)
  }

  // Источник уточнение
  sourceAdditional(text){
    this.textField('[data-field-name="source_additional_id"]', text)
  }

  // Проверка статуса документов
  documentsStatus(text){
    if (text == 'Счет выставлен' ||
        text == 'Счет отправлен' ||
        text == 'Акт отправлен'  ||
        text == 'Акт подписан') {
      cy.get('[data-field-name="source_status"] .multiselect__single')
            .should('contain', text)
    }
    else if (text == '') {
      cy.get('[data-field-name="source_status"] .multiselect__single')
        .should('not.be')
    }
    else {
      assert(false, 'Incorrect input in ChecklPayment.documentsStatus()')
    }
  }

  // Проверка cтатьи расходов
  category(text){
    this.multiselectField('[data-field-name="category"]', text)
  }

  // Проверка статьи расходов, уточнение
  categoryAdditional(text){
    this.textField('[data-field-name="category_additional_id"]', text)
  }

  // Проверка юридического лица
  companyOwn(text){
    this.multiselectField('[data-field-name="company_own"]', text)
  }

  // Проверка контрагента
  companyClient(text){
    this.multiselectField('[data-field-name="company_client"]', text)
  }

  // Проверка счета отправителя
  accountSender(text){
    this.multiselectField('[data-field-name="account_sender"]', text)
  }

  // Проверка счета получателя
  accountRecipient(text){
    this.multiselectField('[data-field-name="account_recipient"]', text)
  }

  // Проверка тэгов
  tags(number){
    const tag = 'Тэг '
    for (let i = 1; i <= number; i++) {
      cy.get('[data-field-name="tags"] .multiselect__tag')
        .children()
        .should('contain', tag + i)
    }
  }

  // Проверка ID в банке
  bankID(){
    cy.get('[data-field-name="external_source_id"] .input__input')
      .should('be.disabled')
  }

  // Проверка всех полей платежа по данным из фикстуры
  byFixture(inputs){
    this.operationType(inputs.operationType)
    // Описание проверяется при открытии страницы, поэтому тут его не проверяем

    this.statusActive(inputs.statusActive)
    this.statusChecked(inputs.statusChecked)

    this.amountPlan(inputs.amountPlan)
    this.amountFact(inputs.amountFact)

    this.paymentStatus(inputs.paymentStatus)

    this.datePlan(inputs.datePlan)
    this.dateFact(inputs.dateFact)

    if (inputs.operationType == "income"){
      this.source(inputs.source)
      this.sourceAdditional(inputs.sourceAdditional)
      this.documentsStatus(inputs.documentsStatus)
    }
    else if (inputs.operationType == "expense"){
      this.category(inputs.category)
      this.categoryAdditional(inputs.categoryAdditional)
    }
    else if (inputs.operationType == "transfer"){

    }
    else{
      assert(false, 'Incorrect "operationType" in json file')
    }

    this.companyOwn(inputs.companyOwn)
    this.companyClient(inputs.companyClient)

    // Временный костыль, чтобы тесты не падали из-за известного бага.
    // При типе операции "Расход" счёт отправителя и счёт получателя не сохраняются
    if (inputs.operationType != "expense"){
      this.accountSender(inputs.accountSender)
      this.accountRecipient(inputs.accountRecipient)
    }

    this.tags(inputs.tags)
    this.bankID()
  }

  // Проверка поля с вбором из выпадающего списка
  multiselectField(dataFieldName, text){
    if (text != "") {
      cy.get(dataFieldName + ' .multiselect__tags span')
        .should('have.class', 'multiselect__single')
        .then(($el) => {
          assert($el.text() == text, 'Check the multiselect filling')
        })
    }
    else{
      cy.get(dataFieldName + ' .multiselect__tags span')
        .should('have.class', 'multiselect__placeholder')
    }
  }

  // Проверка текстового поля
  textField(dataFieldName, text){
    if (text != "") {
      cy.get(dataFieldName + ' .input__input')
        .invoke('val')
        .should('eq', text)
    }
    else {
      cy.get(dataFieldName + ' .input__input')
        .invoke('val')
        .should('be.empty')
    }
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

export default CheckPayment
