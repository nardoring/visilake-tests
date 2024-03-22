import {
  date_range_start_selector,
  date_range_end_selector,
  submit_job_button_selector,
} from "../../selectors/form";

describe("Form Page: Date Range Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

  it("error for no date range entry", () => {
    cy.get(submit_job_button_selector).click();

    cy.get(date_range_start_selector).shouldBeErrorHighlighted();
    cy.get(date_range_end_selector).shouldBeErrorHighlighted();
  });

  it("error for invalid date range entry", () => {
    const startDate = "01/01/2020 05:30";
    const endDate = "01/01/2000 10:45";

    cy.get(date_range_start_selector).typeDate(startDate);
    cy.get(date_range_end_selector).typeDate(endDate);

    cy.get(submit_job_button_selector).click();

    cy.get(date_range_start_selector).shouldBeErrorHighlighted();
    cy.get(date_range_end_selector).shouldBeErrorHighlighted();
  });

  it("passes for valid date range entry", () => {
    const startDate = "01/01/2000 14:30";
    const endDate = "01/01/2020 19:30";

    cy.get(date_range_start_selector).typeDate(startDate);
    cy.get(date_range_end_selector).typeDate(endDate);

    cy.get(submit_job_button_selector).click();

    cy.get(date_range_start_selector).shouldNotBeErrorHighlighted();
    cy.get(date_range_end_selector).shouldNotBeErrorHighlighted();
  });
});
