import FillPayment from '../fill_payment'
import FindChangePayment from '../find_change_payment'
import VisitLoginSite from '../visit_login_site'

describe('Expense payment adding positive testing', () => {
  const fill = new FillPayment()
  const find = new FindChangePayment()
  const visit = new VisitLoginSite()

  beforeEach('Log in', () => {
    visit.site('/')
    visit.loginFromJson('user-admin')
  })

  it('Expense payment adding and deletion test 1', () => {
    // Открыть форму добавления платежа
    fill.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('expense_payment_adding_positive_1')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        fill.addPaymentToTable()
        fill.closeForm()

        // Поиск и удаление добавленного платежа
        find.findPayment(inputs.description)
        find.openPayment(inputs.description)
        find.deletePayment()
    })
  })
})
