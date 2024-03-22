declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickColumnsButton(): Chainable<Subject>;
    showAllColumns(): Chainable<Subject>;
  }
}

Cypress.Commands.add("clickColumnsButton", () => {
  cy.get(".ag-side-buttons").contains("Columns").click();
});

Cypress.Commands.add("showAllColumns", () => {
  cy.clickColumnsButton();
  cy.get(".ag-virtual-list-item").each(($item) => {
    cy.wrap($item).within(() => {
      const checkbox = $item.find(".ag-checkbox-input");
      const isChecked = checkbox.prop("checked");
      if (!isChecked) {
        cy.wrap(checkbox).click();
      }
    });
  });
});