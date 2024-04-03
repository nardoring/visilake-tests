import {
  job_name_selector,
  submit_job_button_selector,
} from "../../../selectors/form";

describe("Form Page: Job Name Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

  it("error for no job name entry", () => {
    cy.get(submit_job_button_selector).click();

    cy.get(job_name_selector).shouldBeErrorHighlighted();
  });

  it("passes for valid job name entry", () => {
    cy.get(job_name_selector).type("Form Page: Job Name Entry Validation");

    cy.get(submit_job_button_selector).click();

    cy.get(job_name_selector).shouldNotBeErrorHighlighted();
  });
});
