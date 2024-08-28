import FillPayment from './fill_payment'
import FindChangePayment from './find_change_payment'
import VisitLoginSite from './visit_login_site'

const SITE_ADDRESS = 'https://fabrique:fabrique@finance.dev.fabrique.studio/'
const SCREEN_SIZE = [1920, 1080]

const EMAIL = 'admin@admin.ad'
const PASSWORD = 'admin'

describe('Payment adding positive testing', () => {
  const fill = new FillPayment()
  const find = new FindChangePayment()
  const visit = new VisitLoginSite()

  beforeEach('Log in', () => {
    visit.site(SITE_ADDRESS, SCREEN_SIZE)
    visit.login(EMAIL, PASSWORD)
  })

  it('Payment adding and deletion test 1', () => {
    fill.openForm()                             // Открыть форму добавления платежа

    fill.operationType_Income()                 // Тип операции:	Доход/приход
    fill.description('Тест 999')                // Описание:	Тест 1
    fill.statusActive()                         // Статус:	Активен
    fill.statusChecked()                        // Статус:	Проверен

    fill.amountPlan(2000)                       // Сумма план:	2000
    fill.amountFact(2000)                       // Сумма факт:	2000
    fill.paymentStatus_NotPayed()               // Статус оплаты:	Не оплачен

    fill.datePlan()                             // Дата план:	[Дата тестирования]
    fill.dateFact()                             // Дата факт:	[Дата тестирования]

    fill.source('Источник 1')                   // Источник:	Источник 1
    fill.sourceAdditional('Источник 1')         // Источник:	Источник 1
    fill.documentsStatus('Акт подписан')        // Статус документов:	Счёт выставлен

    fill.companyOwn('ИП Иванов Иван Иванович')  // Юридическое лицо:	ИП Иванов Иван Иванович
    fill.companyClient('Контрагент 1')          // Контрагент:	Контрагент 1
    fill.accountSender('Счет отправителя 1')    // Счет отправителя:	Счет отправителя 1
    fill.accountRecipient('Счет получателя 1')  // Счет получателя:	Счет получателя 1

    fill.tags(2)                                // Тэги:	Тэг 1
    fill.bankID()                               // ID в банке	[Автоматически заполняется]

    fill.addPaymentToTable()                    // Нажать кнопку "Добавить"
    fill.closeForm()                            // Вернуться на страницу "Платежи"

    // Поиск и удаление добавленного платежа
    find.findPayment('Тест 999')
    find.openPayment('Тест 999')
    find.deletePayment()

    cy.wait(20000)

  })
})
