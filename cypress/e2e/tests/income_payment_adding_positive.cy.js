import FillPayment from '../fill_payment'
import CheckPayment from '../check_payment'
import VisitLoginSite from '../visit_login_site'

describe('Income payment adding positive testing', () => {
  const fill = new FillPayment()
  const check = new CheckPayment()
  const visit = new VisitLoginSite()

  beforeEach('Log in', () => {
    visit.site('/')
    visit.loginFromJson('user-admin')
  })

  // it('Income payment adding and deletion test 1', () => {
  //   // Открыть форму добавления платежа
  //   fill.openForm()
  //
  //   // Использовать данные для заполнения платежа из json файла
  //   cy.fixture('income_payment_adding_positive_1')
  //     .then((inputs) => {
  //       // Заполнение всех полей, используя данные из фикстуры
  //       fill.byFixture(inputs)
  //
  //       // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
  //       fill.addPaymentToTable()
  //       fill.closeForm()
  //
  //       // Поиск и удаление добавленного платежа
  //       check.findPayment(inputs.description)
  //       check.openPayment(inputs.description)
  //       check.byFixture(inputs)
  //       check.deletePayment()
  //   })
  // })

  it('Income payment adding and deletion test 2', () => {
    // Открыть форму добавления платежа
    fill.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('income_payment_adding_positive_2')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        fill.addPaymentToTable()
        fill.closeForm()

        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.byFixture(inputs)
        check.deletePayment()
    })
  })

  it('Income payment adding and deletion test 3', () => {
    // Открыть форму добавления платежа
    fill.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('income_payment_adding_positive_3')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        fill.addPaymentToTable()
        fill.closeForm()

        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.byFixture(inputs)
        check.deletePayment()
    })
  })

  it('Income payment adding and deletion test 4', () => {
    // Открыть форму добавления платежа
    fill.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('income_payment_adding_positive_4')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        fill.addPaymentToTable()
        fill.closeForm()

        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.byFixture(inputs)
        check.deletePayment()
    })
  })

  it('Income payment adding and deletion test 5', () => {
    // Открыть форму добавления платежа
    fill.openForm()

    // Использовать данные для заполнения платежа из json файла
    cy.fixture('income_payment_adding_positive_5')
      .then((inputs) => {
        // Заполнение всех полей, используя данные из фикстуры
        fill.byFixture(inputs)

        // Нажать кнопку "Добавить" и вернуться на страницу "Платежи"
        fill.addPaymentToTable()
        fill.closeForm()

        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.byFixture(inputs)
        check.deletePayment()
    })
  })
})
