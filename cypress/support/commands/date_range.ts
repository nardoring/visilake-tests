declare namespace Cypress {
  interface Chainable<Subject = any> {
    typeDate(date: string): void;
  }
}

Cypress.Commands.add("typeDate", { prevSubject: true }, ($subject, date) => {
  return cy.wrap($subject).type(date.replace(/[^\d]/g, ""));
});
