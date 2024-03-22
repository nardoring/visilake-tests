# Nardo Web Tests
Included in this repo are various integration tests and end to end (e2e) tests for [nardo-web](https://github.com/nardoring/nardo-web)

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

Test spec files include the code for running each test. Click on any spec to run the associated tests.

![image](https://github.com/nardoring/nardo-web-tests/assets/47069058/793cdbd9-6c55-4881-abc6-4cca3416d0ab)

### Viewing Test Results

Once a test spec has been selected, the tests will run within the browser. The results will display in the 'specs' panel as the tests run.

![image](https://github.com/nardoring/nardo-web-tests/assets/47069058/7aad1aec-c728-4ebe-a924-a6b0e599509c)
