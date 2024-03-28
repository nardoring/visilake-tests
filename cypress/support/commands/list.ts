declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickColumnsButton(): Chainable<Subject>;
    showAllColumns(): Chainable<Subject>;
    verifyTableRowData(rowData: TableRowData): Chainable;
  }

  interface TableRowData {
    job_name: string;
    job_description: string;
    sources: string[];
    analysis_types: string[];
    granularity: string;
    date_range: string[];
    date: string;
    author: string;
    status: string;
  }
}

Cypress.Commands.add("clickColumnsButton", () => {
  cy.get(".ag-side-buttons").contains("Columns").click();
});

Cypress.Commands.add("showAllColumns", () => {
  cy.clickColumnsButton();
  cy.get(".ag-virtual-list-item").each(($item) => {
    cy.wrap($item).within(() => {
      const checkbox = $item.find(".ag-checkbox-input");
      const isChecked = checkbox.prop("checked");
      if (!isChecked) {
        cy.wrap(checkbox).click();
      }
    });
  });
});

Cypress.Commands.add("verifyTableRowData", { prevSubject: true }, ($row, rowData) => {
  const { job_name, job_description, sources, analysis_types, granularity, date_range, date, author, status} = rowData;

  cy.wrap($row).within(() => {
    cy.get('[col-id="jobName"]').should("contain.text", job_name);
    cy.get('[col-id="jobDescription"]').should("contain.text", job_description);
    cy.get('[col-id="sources"]').should("contain.text", sources.join(", "));
    cy.get('[col-id="analysisTypes"]').should("contain.text", analysis_types.join(", "));
    cy.get('[col-id="granularity"]').should("contain.text", granularity);
    cy.get('[col-id="dateRange"]').should("contain.text", formatDateRange(date_range).join(" - "));
    cy.get('[col-id="date"]').should("contain.text", date);
    cy.get('[col-id="author"]').should("contain.text", author);
    cy.get('[col-id="jobStatus"]').should("contain.text", status);
  });
});

const formatDateRange = (dates: string[]): string[] => {
  return dates.map(date => {
      const [datePart, timePart] = date.split(' ');
      const [month, day, year] = datePart.split('-');
      const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      return `${formattedDate} ${timePart}`;
  });
};