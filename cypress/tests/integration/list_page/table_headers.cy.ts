describe("List Page: Table Column and Header Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/ListPage");
  });

  it("Verify all expected default headers are present", () => {
    const expectedHeaders = [
      "Job Name",
      "Job Description",
      "Sources",
      "Analysis Types",
      "Date Created",
      "Author",
      "Status",
      "PowerBI",
    ];

    cy.get(".ag-header-row-column").within(() => {
      cy.get(".ag-header-cell-text").each(($header, index) => {
        expect($header).to.have.text(expectedHeaders[index]);
      });
    });
  });

  it("Verify all table columns are available", () => {
    const expectedColumns = [
      "Job Name",
      "Job Description",
      "Sources",
      "Analysis Types",
      "Granularity",
      "Date Range",
      "Date Created",
      "Author",
      "Status",
      "PowerBI",
    ];

    cy.clickColumnsButton();

    cy.get(".ag-virtual-list-container")
      .find(".ag-virtual-list-item")
      .each(($column, index) => {
        // Assert the label of each available column
        cy.wrap($column)
          .find(".ag-column-select-column-label")
          .should("have.text", expectedColumns[index]);
      });
  });
});
