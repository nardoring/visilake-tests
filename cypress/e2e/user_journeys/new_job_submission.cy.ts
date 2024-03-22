import {
  date_range_end_selector,
  date_range_start_selector,
  job_description_selector,
  job_name_selector,
  sources_selector,
  submission_result_header_selector,
  submit_job_button_selector,
  view_jobs_button_selector,
} from "../selectors/form";

describe("Job Submission Tests", function () {
  before(function () {
    cy.visit("http://localhost:45139/");
    cy.fixture("job_submission.json").then(function (job_submission_data) {
      this.job_name = job_submission_data.job_name;
      this.analysis_types = job_submission_data.analysis_types;
      this.sources = job_submission_data.sources;
      this.date_range = job_submission_data.date_range;
      this.description = job_submission_data.description;
    });
    cy.wait(1000); // Add a wait for 1 second for stability
  });

  it("Verify job submission is successful", function () {
    // Enter job name
    cy.get(job_name_selector).type(this.job_name);

    // Select analysis types
    this.analysis_types.forEach((analysisType) => {
      cy.selectAnalysisType(analysisType);
    });

    // Enter sources
    this.sources.forEach((source) => {
      cy.get(sources_selector).type(source).type("{enter}");
    });

    // Enter date range
    cy.get(date_range_start_selector).type(this.date_range[0]);
    cy.get(date_range_end_selector).type(this.date_range[1]);

    // Enter job description
    cy.get(job_description_selector).type(this.description);

    // Click submit button
    cy.get(submit_job_button_selector).click().wait(500);

    // Assert job was successfully submitted
    cy.get(submission_result_header_selector).should(
      "have.text",
      "Job Successfully Submitted"
    );

    // Navigate to list page
    cy.get(view_jobs_button_selector).click();
  });
});
