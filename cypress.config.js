const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video:true,
  videosFolder :'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  chromeWebSecurity : false,
  pageLoadTimeout : 150000 ,
  numTestsKeptInMemory : 0,
  responseTimeout : 30000,
  reporterOptions: {
    charts: true,
    reportFilename: 'clovertest',
    reportPageTitle: 'testing',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
   
  }, 
  env: {
    hideXHRInCommandLog : true
  } ,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     return require('./cypress/plugins/index.js')(on , config);
    },
    testIsolation : true
  },
});
