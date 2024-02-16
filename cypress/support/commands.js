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
/**
 * backend rest api calls
 */

const postObject = {
  method: 'POST',
  headers: {
    'api=key': '',
    'user-id': '',
    'user-full-name': ''
  }
};
const getObject = {
  method: 'GET',
  headers: {
    'api=key': '',
    'user-id': '',
    'user-full-name': ''
  }
};
const deleteObject = {
  method: 'DELETE',
  headers: {
    'api=key': '',
    'user-id': '',
    'user-full-name': ''
  }
};
const putObject = {
  method: 'PUT',
  headers: {
    'api=key': '',
    'user-id': '',
    'user-full-name': ''
  }
};

Cypress.Commands.add('postCall' ,(url,body) => {

  const requestObj = {
    ...postObject,
    body,
    url
  };

  return cy.request(requestObj)


})

Cypress.Commands.add('deleteCall' ,(url) => {

  const requestObj = {
    ...deleteObject,
    url
  };

  return cy.request(requestObj)


})

Cypress.Commands.add('getCall' ,(url) => {

  const requestObj = {
    ...getObject,
    url
  };

  return cy.request(requestObj)


})
Cypress.Commands.add('putCall' ,(url,body) => {

  const requestObj = {
    ...putObject,
    body,
    url
  };

  return cy.request(requestObj)


})

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
