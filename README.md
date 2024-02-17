Clover Assessment

Steps to setup:
     checkout from the provided git repo

     install node.js and npm

     then open project in vscode

     then run command "npm install"

     to run test case in test runner , execute "npx cypress open --env configFile=qa --browser chrome" or npm run cy:open:qa

     to generate video and mochawesome html report , execute "npx cypress run --env configFile=qa --browser chrome --headed" or 
     npm run cy:run:qa

     to test cross-browser functionality , we can parameterize --browser value 

     framework:
              page ogject model with data driven

              support/commands.js can be used to keep common utility functions

              support/pages can be used to create pages as per application

              config folder is the place where we can update environment specific details like qa , stage , uat , prod etc

              reprts folder is the place where html repor and video can be found when we execute npx cypress ran command and i attached successful report and video

              



