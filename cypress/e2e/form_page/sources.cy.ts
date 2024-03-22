import {
  sources_selector,
  submit_job_button_selector,
} from "../../selectors/form";

describe("Form Page: Source Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

    it("error for no source entry", () => {
      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldBeErrorHighlighted();
    });

    it("error for invalid source entry", () => {
      cy.get(sources_selector)
        .type("Form Page: Source Entry Validation")
        .type("{enter}");

      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldBeErrorHighlighted();
    });

    it("error for wrong format source entry", () => {
      cy.get(sources_selector).type("1234-ABCD-12345").type("{enter}");

      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldBeErrorHighlighted();
    });

    it("error for non-existant source entry", () => {
      cy.get(sources_selector).type("9999-ZZZ-99999").type("{enter}");

      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldBeErrorHighlighted();
    });

    it("passes for valid source entry", () => {
      // Select first autocomplete result
      cy.get(sources_selector).click().type("{downarrow}").type("{enter}");

      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldNotBeErrorHighlighted();
    });

  it("passes for entering multiple valid sources", () => {
    // Select first two autocomplete results
    cy.get(sources_selector).click().type("{downarrow}").type("{enter}");
    cy.get(sources_selector).click().type("{downarrow}").type("{enter}");

    cy.get(submit_job_button_selector).click();

    cy.get(sources_selector).shouldNotBeErrorHighlighted();
  });
});
