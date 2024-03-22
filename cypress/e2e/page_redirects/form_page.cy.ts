import { view_jobs_button_selector } from "../../selectors/form";

describe("Page Redirects: Form Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

  it("verify form page 'View Jobs' redirects to list page", () => {
    cy.get(view_jobs_button_selector).click();

    cy.url().should("eq", "http://localhost:45139/ListPage");
  });
});
