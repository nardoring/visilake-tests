declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickColumnsButton(): Chainable<Subject>;
  }
}

Cypress.Commands.add("clickColumnsButton", () => {
  cy.get(".ag-side-buttons").contains("Columns").click();
});
