const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on,config)
      return config;
      // implement node event listeners here
    },
    // specPattern: "./cypress/tests/**.*",
    baseUrl: "https://d1dluuhz8dq85l.cloudfront.net"
   
  },
  component:{
    devServer:{
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
