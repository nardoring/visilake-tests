import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    specPattern: "cypress/tests/**/*.cy.ts",
    experimentalRunAllSpecs: true,
  },
});
