// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('launchBrowser' , (searchEngine) => {
   
   if(searchEngine === "google") {
    cy.log('google site is '+Cypress.env('applicationUrlGoogle'))
     cy.visit(Cypress.env('applicationUrlGoogle'))
   }else
   {
    cy.log('yahoo site is '+Cypress.env('applicationUrlYahoo'))
    cy.visit(Cypress.env('applicationUrlYahoo'))
   }
   
})

Cypress.Commands.add('launchApp' , () => {
 
  cy.visit('')
 
})