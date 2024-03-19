import {
  analysis_types_selector,
  submit_job_button_selector,
} from "../selectors/form";

describe("Form Page: Analysis Types Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
    cy.wait(1000); // Add a wait for 1 second for stability
  });

  it("fails for no analysis entry", () => { // TODO: Update when no analysis type selection is allowed
    cy.get(submit_job_button_selector).click(); 

    cy.get(analysis_types_selector).shouldBeErrorHighlighted();
  });

  it("passes for valid single analysis type entry", () => {
    cy.get(analysis_types_selector).click();

    cy.selectAnalysisType("Rolling Mean");
    cy.verifySelectedAnalysisType("Rolling Mean");

    cy.get(submit_job_button_selector).click();

    cy.get(analysis_types_selector).shouldNotBeErrorHighlighted();
  });

  it("passes for valid multiple analysis types entry", () => {
    cy.get(analysis_types_selector).click();

    cy.selectAnalysisType("Rolling Mean");
    cy.selectAnalysisType("Autocorrelation"); // TODO: Update when Analysis Type Dropdown is updated to actual options (Rolling Mean, Correlation, EDA)

    cy.verifySelectedAnalysisType("Rolling Mean, Autocorrelation");

    cy.get(submit_job_button_selector).click();

    cy.get(analysis_types_selector).shouldNotBeErrorHighlighted();
  });
});
