import VisitLoginSite from '../visit_login_site'
import InterfaceManipulations from '../interface_manipulations'
import FillPayment from '../fill_payment'
import CheckPayment from '../check_payment'

describe('Expense payment adding positive testing', () => {
  const visit = new VisitLoginSite()
  const ui = new InterfaceManipulations()
  const fill = new FillPayment()
  const check = new CheckPayment()

  beforeEach('Log in', () => {
    visit.site('/')
    visit.loginFromJson('user-admin')
  })

  it('Expense payment adding and deletion test 1', () => {
    // Открыть форму добавления платежа
    ui.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('expense_payment_adding_positive_1')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        ui.addPaymentToTable()
        ui.closeForm()

        // Поиск, проверка и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        check.byFixture(inputs)
        ui.deletePayment()
    })
  })

  it('Expense payment adding and deletion test 2', () => {
    // Открыть форму добавления платежа
    ui.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('expense_payment_adding_positive_2')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        ui.addPaymentToTable()
        ui.closeForm()

        // Поиск, проверка и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        check.byFixture(inputs)
        ui.deletePayment()
    })
  })

  it('Expense payment adding and deletion test 3', () => {
    // Открыть форму добавления платежа
    ui.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('expense_payment_adding_positive_3')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        ui.addPaymentToTable()
        ui.closeForm()

        // Поиск, проверка и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        check.byFixture(inputs)
        ui.deletePayment()
    })
  })

  it('Expense payment adding and deletion test 4', () => {
    // Открыть форму добавления платежа
    ui.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('expense_payment_adding_positive_4')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        ui.addPaymentToTable()
        ui.closeForm()

        // Поиск, проверка и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        check.byFixture(inputs)
        ui.deletePayment()
    })
  })
})
