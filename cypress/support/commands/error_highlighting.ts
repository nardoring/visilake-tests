declare namespace Cypress {
  interface Chainable<Subject = any> {
    shouldBeErrorHighlighted(): Chainable<Subject>;
    shouldNotBeErrorHighlighted(): Chainable<Subject>;
  }
}

Cypress.Commands.add(
  "shouldBeErrorHighlighted",
  { prevSubject: true },
  ($element) => {
    cy.wrap($element).should("have.class", "ring-red");
  }
);

Cypress.Commands.add(
  "shouldNotBeErrorHighlighted",
  { prevSubject: true },
  ($element) => {
    cy.wrap($element).should("not.have.class", "ring-red");
  }
);
