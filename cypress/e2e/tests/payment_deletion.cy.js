import VisitLoginSite from '../visit_login_site'
import InterfaceManipulations from '../interface_manipulations'

describe('Expense payment adding positive testing', () => {
  const visit = new VisitLoginSite()
  const ui = new InterfaceManipulations()

  beforeEach('Log in', () => {
    visit.site('/')
    visit.loginFromJson('user-admin')
  })

  it('Delete payment after Income payment adding test 1', () => {
    cy.fixture('income_payment_adding_positive_1')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Income payment adding test 2', () => {
    cy.fixture('income_payment_adding_positive_2')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Income payment adding test 3', () => {
    cy.fixture('income_payment_adding_positive_3')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Income payment adding test 4', () => {
    cy.fixture('income_payment_adding_positive_4')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Income payment adding test 5', () => {
    cy.fixture('income_payment_adding_positive_5')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Expense payment adding test 1', () => {
    cy.fixture('expense_payment_adding_positive_1')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Expense payment adding test 2', () => {
    cy.fixture('expense_payment_adding_positive_2')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Expense payment adding test 3', () => {
    cy.fixture('expense_payment_adding_positive_3')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })

  it('Delete payment after Expense payment adding test 4', () => {
    cy.fixture('expense_payment_adding_positive_4')
      .then((inputs) => {
        // Поиск и удаление добавленного платежа
        ui.findPayment(inputs.description)
        ui.openPayment(inputs.description)
        ui.deletePayment()
    })
  })
})
