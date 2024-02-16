const { defineConfig } = require("cypress");

module.exports = defineConfig({
   e2e: {
     applicationUrlGoogle:  "https://google.com",
     applicationUrlYahoo:  "https://yahoo.com",
     searchString : "clover.com",
     searchStringDoesNotExist: "%%%%%%%%%%%%%%%%%%%%%%",
   
   },
   env:{
    searchengine:""
   }
});
