declare namespace Cypress {
  interface Chainable<Subject = any> {
    selectFirstAutocompleteOption(): Chainable<Subject>;
  }
}

Cypress.Commands.add("selectFirstAutocompleteOption", { prevSubject: true }, ($subject) => {
  return cy.wrap($subject).click().wait(1000).type("{downarrow}").type("{enter}");
});
