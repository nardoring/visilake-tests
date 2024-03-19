const date_range_start_identifier =
  "#date-range-start-input > .MuiFormControl-root";
const date_range_end_identifier =
  "#date-range-end-input > .MuiFormControl-root";

describe("Form Page: Date Range Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

  it("error for no date range entry", () => {
    cy.get("[id=submit-job-button]").click();

    cy.get(date_range_start_identifier).should("have.class", "ring-1 ring-red");
    cy.get(date_range_end_identifier).should("have.class", "ring-1 ring-red");
  });

  it("error for invalid date range entry", () => {
    const startDate = "01/01/2020 00:00";
    const endDate = "01/01/2000 00:00";

    cy.get("[id=submit-job-button]").click();

    cy.get(date_range_start_identifier).type(startDate);
    cy.get(date_range_end_identifier).type(endDate);

    cy.get(date_range_start_identifier).should("have.class", "ring-1 ring-red");
    cy.get(date_range_end_identifier).should("have.class", "ring-1 ring-red");
  });

  it("passes for valid date range entry", () => {
    const startDate = "01/01/2000 00:00";
    const endDate = "01/01/2020 00:00";

    cy.get(date_range_start_identifier).type(startDate);
    cy.get(date_range_end_identifier).type(endDate);

    cy.get("[id=submit-job-button]").click();

    cy.get(date_range_start_identifier).should(
      "not.have.class",
      "ring-1 ring-red"
    );
    cy.get(date_range_end_identifier).should(
      "not.have.class",
      "ring-1 ring-red"
    );
  });
});
