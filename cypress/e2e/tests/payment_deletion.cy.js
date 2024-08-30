import VisitLoginSite from '../visit_login_site'
import CheckPayment from '../check_payment'

describe('Expense payment adding positive testing', () => {
  const visit = new VisitLoginSite()
  const check = new CheckPayment()

  beforeEach('Log in', () => {
    visit.site('/')
    visit.loginFromJson('user-admin')
  })

  it('Delete payment after income payment adding test 1', () => {
    cy.fixture('income_payment_adding_positive_1')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.deletePayment()
    })
  })

  it('Delete payment after income payment adding test 2', () => {
    cy.fixture('income_payment_adding_positive_2')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.deletePayment()
    })
  })

  it('Delete payment after income payment adding test 3', () => {
    cy.fixture('income_payment_adding_positive_3')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.deletePayment()
    })
  })

  it('Delete payment after income payment adding test 4', () => {
    cy.fixture('income_payment_adding_positive_4')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.deletePayment()
    })
  })

  it('Delete payment after income payment adding test 5', () => {
    cy.fixture('income_payment_adding_positive_5')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.deletePayment()
    })
  })

  it('Delete payment after expense payment adding test 1', () => {
    cy.fixture('expense_payment_adding_positive_1')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        check.findPayment(inputs.description)
        check.openPayment(inputs.description)
        check.deletePayment()
    })
  })
})
