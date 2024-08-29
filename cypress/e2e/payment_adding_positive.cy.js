import FillPayment from './fill_payment'
import FindChangePayment from './find_change_payment'
import VisitLoginSite from './visit_login_site'

describe('Payment adding positive testing', () => {
  const fill = new FillPayment()
  const find = new FindChangePayment()
  const visit = new VisitLoginSite()

  beforeEach('Log in', () => {
    visit.site('/')
    visit.loginFromJson('user-admin')
  })

  it('Payment adding and deletion test 1', () => {
    fill.openForm()                             // Открыть форму добавления платежа

    cy.fixture('payment_adding_income_positive_1')
      .then((inputs) => {
        // if (inputs.operationType == "income"){
        //   fill.operationType_Income() // Тип операции "Доход/приход"
        // }
        // else if (inputs.operationType == "expense"){
        //   fill.operationType_Expense() // Тип операции "Расход"
        // }
        // else if (inputs.operationType == "transfer"){
        //   fill.operationType_Transfer() // Тип операции "Перевод средств"
        // }
        // else{
        //   assert(false, 'Incorrect "operationType" in json file')
        // }
        //
        // fill.description(inputs.description) // Описание: Test 1
        //
        // if (inputs.statusActive){
        //   fill.statusActive() // Статус: Активен
        // }
        //
        // if (inputs.statusChecked){
        //   fill.statusChecked() // Статус: Проверен
        // }
        //
        // fill.amountPlan(inputs.amountPlan)  // Сумма план: 2000
        // fill.amountFact(inputs.amountFact)  // Сумма факт: 2000
        // fill.paymentStatus_NotPayed()       // Статус оплаты: Не оплачен
        //
        // fill.datePlan() // Дата план:	[Дата тестирования]
        // fill.dateFact() // Дата факт:	[Дата тестирования]
        //
        // fill.source(inputs.source)                      // Источник:	Источник 1
        // fill.sourceAdditional(inputs.sourceAdditional)  // Источник:	Источник 1
        // fill.documentsStatus(inputs.documentsStatus)    // Статус документов:	Счёт выставлен
        //
        // fill.companyOwn(inputs.companyOwn)              // Юридическое лицо:	ИП Иванов Иван Иванович
        // fill.companyClient(inputs.companyClient)        // Контрагент:	Контрагент 1
        // fill.accountSender(inputs.accountSender)        // Счет отправителя:	Счет отправителя 1
        // fill.accountRecipient(inputs.accountRecipient)  // Счет получателя:	Счет получателя 1
        //
        // fill.tags(inputs.tags)  // Тэги:	Тэг 1
        // fill.bankID()           // ID в банке	[Автоматически заполняется]
        //
        // fill.addPaymentToTable()  // Нажать кнопку "Добавить"
        fill.closeForm()          // Вернуться на страницу "Платежи"

        // Поиск и удаление добавленного платежа
        find.findPayment(inputs.description)
        find.openPayment(inputs.description)
        // find.deletePayment()
    })
    // cy.wait(10000)

  })
})
