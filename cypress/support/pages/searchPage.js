
const google = {
    searchTextAreaEle : 'textarea#APjFqb',
    firstSearchResultOnSearchPageEle  : 'a[data-impdclcc="1"] span[data-dtld="clover.com"]'
}
const yahoo = {
    searchInputEle: 'input#ybar-sbq',
    firstSearchResultEle: 'li[pos="0"]',
    firstSearchResultOnSearchPageEle : 'a.va-bot.bcan1cb div span'
}
export class SearchPage {
    /**
     * search for a given text
     * @param {*} searchString 
     */
    searchFor(searchString) {
        if (Cypress.env('searchEngine') === "google") {
            cy.get(google.searchTextAreaEle).type(searchString, { timeout: 60000 })
            cy.screenshot("1-a-search-google")
        } else {
            cy.get(yahoo.searchInputEle, { timeout: 10000 }).should('exist').type(searchString)
            //cy.screenshot("2-a-search-yahoo")
        }

    }
    /**
     * asserting on search results to verify first returned result matches with searchString
     * expectedResultPosition is for expected postion of returned string
     * if isStringExist is true , search string should exist otherwise it should not exist 
     * @param {*} searchString 
     * @param {*} expectedResultPosition
     * @param {*} isStringExist
     */
    verifysearchedString(searchString, expectedResultPosition, isStringExist) {
        if (Cypress.env('searchEngine') === "google") {
            if (isStringExist) {
                cy.get('li[data-view-type="' + expectedResultPosition + '"]', { timeout: 30000 }).get('div[aria-label = "' + searchString + '"]', { timeout: 10000 })
                    .should('exist')
                    cy.screenshot("1-b-search-google")
                    cy.get(google.searchTextAreaEle).type("{enter}")
                    cy.get(google.firstSearchResultOnSearchPageEle,{timeout:30000}).should('contain.text',searchString)
                    cy.screenshot("1-c-search-google")
                    
            } else {
                cy.get('li[data-view-type="' + expectedResultPosition + '"]', { timeout: 30000 }).get('div[aria-label = "' + searchString + '"]', { timeout: 10000 })
                    .should('not.exist')
                    cy.screenshot("1-d-search-google")
            }
        } else {
            if (isStringExist) {
                cy.get(yahoo.firstSearchResultEle).get('span._yb_17olu b._yb_j38nd', { timeout: 30000 }).eq(0).should('have.text', searchString)
                    .should('exist')
                   // cy.screenshot("2-b-search-yahoo")
                    cy.get(yahoo.searchInputEle).type("{enter}") 
                    cy.get(yahoo.firstSearchResultOnSearchPageEle).eq(0).should('contain.text',searchString)
                  //  cy.screenshot("2-c-search-yahoo")
            } else {
                cy.get(yahoo.firstSearchResultEle)
                    .should('not.exist')
                   // cy.screenshot("2-d-search-yahoo")
            }
        }
    }

}