import { new_job_button_selector } from "../selectors/list_page";

describe("Page Redirects: List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/ListPage");
  });

  it("verify list page 'New Jobs' redirects to form page", () => {
    cy.get(new_job_button_selector).click();

    cy.url().should("eq", "http://localhost:45139/");
  });
});