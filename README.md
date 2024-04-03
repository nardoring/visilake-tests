# VisiLake Tests
Included in this repo are various integration tests and end to end (e2e) tests for [visilake](https://github.com/nardoring/visilake)

All testing is conducted using the [Cypress](https://www.cypress.io/) testing framework.

# Installation Instructions

### Clone the repo
```shell
git clone https://github.com/nardoring/nardo-web-tests
```

### Install required packages
```shell
npm install
```

# Running Tests

**Prerequisite**: **`nardo-web` must be built and running on `localhost:45139`**

### Run Cypress
```shell
npx cypress open
```

This should open up the following window:

![image](https://github.com/nardoring/nardo-web-tests/assets/47069058/f9674c39-50a5-43f2-ba8d-48cbb6718dbd)

Select `E2E Tesing`

### Choose Browser for Testing

![image](https://github.com/nardoring/nardo-web-tests/assets/47069058/e7c93ef9-f369-43bf-8254-953b77e68010)

### Select Test Specs

Test spec files include the code for running each test. Click on any spec to run the associated tests, or click `Run X Specs` to run all tests.

![image](https://github.com/nardoring/nardo-web-tests/assets/47069058/84003112-11f1-4af5-8b5c-2b322681b615)

### Viewing Test Results

After selecting the test spec(s), the tests will commence execution within the browser environment. As the tests run, you can monitor the results in real-time within the 'specs' panel.

![image](https://github.com/nardoring/nardo-web-tests/assets/47069058/7aad1aec-c728-4ebe-a924-a6b0e599509c)

# Tests Overview

### Example Test Spec

Here's an example test spec, just to give an idea of how these tests work.
Most test specs are in a similar layout to this:

```ts
describe("Form Page: Source Entry Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:45139/");
  });

    it("error for no source entry", () => {
      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldBeErrorHighlighted();
    });
    
    it("error for invalid source entry", () => {
      cy.get(sources_selector)
        .type("Form Page: Source Entry Validation")
        .type("{enter}");

      cy.get(submit_job_button_selector).click();

      cy.get(sources_selector).shouldBeErrorHighlighted();
    });
   ...
```

This test spec does the following:
- Before each test, visits the provided URL (form page)
- Runs each test within the spec
  - Test: "error for no source entry"
    - Clicks the submit job button
    - Verifies source field is error highlighted
  - Test: "error for invalid source entry"
    - Inputs the provided text into the sources field
    - Clicks the submit job button
    - Verifies the source field is error highlighted 
    

### Included Tests (specs)
- Integration
  - Form Page
    - Job Name Input
      - Verify job name entry is required
    - Analysis Type Input
      - Verify analysis type entry is required
      - Verify one or many options can be selected
    - Sources Input
      - Verify sources entry is required
      - Verify one or many sources can be inputted 
      - Verify incorrectly formatted tags fail
      - Verify functionality of Autocompletion
    - Date Range Input
      - Verify date range entry is required
      - Verify a valid date range passes
      - Verify an invalid date range fails
    - Description Input
      - Verify description entry is required 
  - List Page
    - Verify all default table headers are present
    - Verify all expected columns are available (including ones by default such as granularity and date range) 
  - Redirects
    - Verify the 'new job' button on the list page redirects to the form page
    - Verify the 'view jobs' button on the form page redirects to the list page
- E2E
  - Verify full form submission is successful
  - Verify the table row for the submitted job matches what was submitted
 
### Selectors
 
The Selectors folder includes various string consts such as:

```ts
export const view_jobs_button_selector = "#view-jobs-button";
```

These are used within test specs when selecting specific components

```ts
cy.get(submit_job_button_selector).click();
```

### Commands

The commands folder includes custom commands that can be used across any of the tests.

For example, a custom command that selects the first Autocompletion option for the input field:

```ts
Cypress.Commands.add("selectFirstAutocompleteOption", { prevSubject: true }, ($subject) => {
  return cy.wrap($subject).click().wait(1000).type("{downarrow}").type("{enter}");
});
```

```ts
cy.get(sources_selector).selectFirstAutocompleteOption();
```

