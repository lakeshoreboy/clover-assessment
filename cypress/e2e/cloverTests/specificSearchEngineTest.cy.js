import { GoogleSearchPage } from "../../support/pages/googleSearchPage";
import { YahooSearchPage } from "../../support/pages/yahooSearchPage";

const googleSearchPage = new GoogleSearchPage();
const yahooSearchPage = new YahooSearchPage();
const searchString = Cypress.env('searchString');
const searchStringDoesNotExist = Cypress.env('searchStringDoesNotExist');
var searchEngine = Cypress.env('searchengine');


describe('testing search functionality on search engine  ' + searchEngine, () => {

    before(() => {

        cy.log('setting up data ----------')
        cy.log('config is ' + Cypress.env('configFileName'))

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
            if (searchEngine === 'google') {
                googleSearchPage.searchFor(searchString)
                googleSearchPage.verifysearchedString(searchString, 1, true)
            } else {
                yahooSearchPage.searchFor(searchString)
                yahooSearchPage.verifysearchedString(searchString, 1, true)
            }



        })
    })
    describe('testing negative scenario', () => {
        beforeEach(() => {

            cy.launchBrowser(searchEngine);

        })
        it('search for a string that does not exist  ', () => {

            cy.log('searching for ' + searchStringDoesNotExist)
            if (searchEngine === 'google') {
                googleSearchPage.searchFor(searchStringDoesNotExist)
                googleSearchPage.verifysearchedString(searchStringDoesNotExist, 1, false)
            } else {
                yahooSearchPage.searchFor(searchStringDoesNotExist)
                yahooSearchPage.verifysearchedString(searchStringDoesNotExist, 1, false)
            }


        })
    })

})

