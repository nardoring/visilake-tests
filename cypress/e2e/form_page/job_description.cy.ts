import {
  job_description_selector,
  submit_job_button_selector,
} from "../selectors/form";

describe("Form Page: Job Description Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

  it("error for no job description entry", () => {
    cy.get(submit_job_button_selector).click();

    cy.get(job_description_selector).should("have.class", "ring-1 ring-red");
  });

  it("passes for valid job description entry", () => {
    cy.get(job_description_selector).type(
      "Form Page: Job Name Entry Validation"
    );

    cy.get(submit_job_button_selector).click();

    cy.get(job_description_selector).should(
      "not.have.class",
      "ring-1 ring-red"
    );
  });
});
