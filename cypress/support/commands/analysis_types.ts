declare namespace Cypress {
  interface Chainable<Subject = any> {
    selectAnalysisType(analysisType: string): void;
    verifySelectedAnalysisType(expectedText: string): void;
  }
}

Cypress.Commands.add("selectAnalysisType", (analysisType) => {
  cy.get("#analysis-type-input .rmsc").click();
  cy.wait(250).get("#analysis-type-input .options")
    .contains("span", analysisType)
    .click();
  cy.get("#analysis-type-input .rmsc").click();
});

Cypress.Commands.add("verifySelectedAnalysisType", (expectedText) => {
  cy.get(".dropdown-heading-value span").should("have.text", expectedText);
});
