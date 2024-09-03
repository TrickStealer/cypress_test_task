# cypress_test_task
### Cypress project for web application end2end testing    

Application: https://fabrique:fabrique@finance.dev.fabrique.studio/

For testing algorithm i used testing check-list. First two tables at the first list:

https://docs.google.com/spreadsheets/d/1zYroPo_W-m-psTZtgbVmRI5Bz9JswnAZYHIBeZQvny8/edit?usp=sharing

  <br/>

Spec files are located in **cypress/e2e/tests/**

|File      |Description      |
| :---- | ---- |
|income_payment_adding_positive.cy.js| Positive testing of adding payments with **income type.**<br/>Includes opening the payment adding form, filling it, check and delete added payment. |
|expense_payment_adding_positive.cy.js| Positive testing of adding payments with **expense type**.<br/>Includes opening the payment adding form, filling it, check and delete added payment. |
|payment_deletion.cy.js| Not for testing. Automation of payments deletion. Necessary when testing specs goes not fully. |

​    <br/>

In spec files i use methods for different actions in tests. It helps customize and scale tests.

Files with methods and their classes are located in **cypress/e2e/**

| File                       | Class                  | Description                                                  |
| :------------------------- | ---------------------- | ------------------------------------------------------------ |
| visit_login_site.js        | VisitLoginSite         | Methods for visiting and authorization at goal web site.     |
| interface_manipulations.js | InterfaceManipulations | Methods for moving between pages on the web site, clicking buttons searching payments in table etc. |
| fill_payment.js            | FillPayment            | Methods for filling fields at opened payment form.           |
| check_payment.js           | CheckPayment           | Methods for check fields at opened payment form.             |

  <br/>

For more easy customize and scale tests i use json files with different fixtures.

Json files are located in **cypress/fixtures**

| File                                                         | Description                                                  |
| :----------------------------------------------------------- | ------------------------------------------------------------ |
| user-admin.json                                              | Fixture with login and password for authorization at goal web site.<br/>At real project it should not be in repository. Especially in open repository =) |
| income_payment_adding_positive_1.json<br/>income_payment_adding_positive_2.json<br/>income_payment_adding_positive_3.json<br/>income_payment_adding_positive_4.json<br/>income_payment_adding_positive_5.json | Fixtures for positive testing of adding payments with **income type.**<br/>Includes testing data for filling description, payment type, amount etc. |
| expense_payment_adding_positive_1.json<br/>expense_payment_adding_positive_2.json<br/>expense_payment_adding_positive_3.json<br/>expense_payment_adding_positive_4.json | Fixtures for positive testing of adding payments with **expense type.**<br/>Includes testing data for filling description, payment type, amount etc. |

  <br/>

Web site's URL and screen's sizes are written in config file: **cypress.config.js**

  <br/>

Now few tests in **expense_payment_adding_positive.cy.js** assert with message: 

`Timed out retrying after 4000ms: expected '<span.multiselect__placeholder>' to have class 'multiselect__single'`

Because the application have the bug. Fields "Sender's account" (Счёт отправителя) and "Recipient's account" (Счёт получателя) don't save theirs value after adding the payment. I've written bug report about it: https://docs.google.com/document/d/1e2j81dHhenTu78yEVQRoDCOvwQURorCzI7RFj2WwEvw/edit#heading=h.h7gov5d4ykqd (Bug-8)

  <br/>

In **interface_manipulations.js** in methods findPayment(text) and findPaymentForDeletion(text) i have written twice this method calling:

`.type('{enter}')`

This is a temporary solution. Because the have application the bug. Searching in the table starts only after second click the "Enter" button. I've written bug report about it: https://docs.google.com/document/d/1e2j81dHhenTu78yEVQRoDCOvwQURorCzI7RFj2WwEvw/edit#heading=h.m5xx8olg0phc (Bug-9)
