declare namespace Cypress {
  interface Chainable<Subject = any> {
    selectFirstAutocompleteOption(): Chainable<Subject>;
    checkSourceTag(tag: string, isValid: boolean): Chainable<Subject>;
  }
}

Cypress.Commands.add("selectFirstAutocompleteOption", { prevSubject: true }, ($subject) => {
  return cy.wrap($subject).click().wait(1000).type("{downarrow}").type("{enter}");
});

Cypress.Commands.add("checkSourceTag", (tag: string, shouldBeValid: boolean) => {
  let tagFound = false;

  cy.wait(1000).get('#source-tag-container').find('.source-tag').each(($source) => {
    const sourceText = $source.text().trim();
    if (sourceText === tag) {
      const sourceTagIsValid = $source.hasClass("border-green");
      expect(shouldBeValid).to.equal(sourceTagIsValid);
      tagFound = true;
    }
  }).then(() => {
    if (!tagFound) {
      throw new Error("Source Tag Check Failed: Tag not found");
    }
  });
});