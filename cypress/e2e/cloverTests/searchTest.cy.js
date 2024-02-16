import { SearchPage } from "../../support/pages/searchPage";

import searchEnginesData from '../../fixtures/searchEngines.json'


const searchPage = new SearchPage();
const searchString = Cypress.env('searchString');
const searchStringDoesNotExist = Cypress.env('searchStringDoesNotExist');
var searchEngine = '';

searchEnginesData.searchengines.forEach(searchEngineObj => {

    describe('testing search functionality on search engine  '+searchEngineObj.searchEngine, () => {
        before(() => {

            cy.log('setting up data ----------')
            searchEngine = searchEngineObj.searchEngine;
            Cypress.env('searchEngine', searchEngine)
            cy.log(Cypress.env('searchEngine'))
            cy.log("perofrming seach functionality on search engine :" + searchEngine)
        })

        after(() => {
            cy.log('cleaning up data ----------')
        })
        describe('testing positive scenario ', () => {
            beforeEach(() => {

                cy.launchBrowser(searchEngine);
            })

            it('search and verify the given search key ', () => {

                cy.log('searching for ' + searchString)
                searchPage.searchFor(searchString)
                searchPage.verifysearchedString(searchString, 1, true)


            })
        })
        describe('testing negative scenario', () => {
            beforeEach(() => {

                cy.launchBrowser(searchEngine);
                
            })
            it('search for a string that does not exist  ', () => {

                cy.log('searching for ' + searchStringDoesNotExist)
                searchPage.searchFor(searchStringDoesNotExist)
                searchPage.verifysearchedString(searchStringDoesNotExist, 1, false)


            })
        })

    })

})