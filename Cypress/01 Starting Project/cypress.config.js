import { defineConfig } from "cypress";

export default defineConfig({
  // video:true,
  // screenshotOnRunFailure:true,
  // defaultCommandTimeout:6000, //should wait for 6 seconds before a test fails ,default is 4 seconds
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://localhost:5173'
  },
});
