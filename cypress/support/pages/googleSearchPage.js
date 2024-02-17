
const searchTextAreaEle = 'textarea#APjFqb';
const firstSearchResultOnSearchPageEle = 'a[data-impdclcc="1"] span[data-dtld="clover.com"]';
const firstResultOnSearchPage = 'div#rso div:nth-child(1) div.eKjLze a:nth-child(1)'

export class GoogleSearchPage {

    /**
    * search for a given text
    * @param {*} searchString 
    */
    searchFor(searchString) {

        cy.get(searchTextAreaEle).type(searchString, { timeout: 60000 })
        cy.screenshot("1-a-search-google")


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

        if (isStringExist) {
            cy.get('li[data-view-type="' + expectedResultPosition + '"]', { timeout: 30000 }).get('div[aria-label = "' + searchString + '"]', { timeout: 10000 })
                .should('exist')
            cy.screenshot("1-b-search-google")
            cy.get(searchTextAreaEle).type("{enter}")
            cy.get(firstResultOnSearchPage, { timeout: 30000 }).should('exist').and('have.attr', 'href').and('include', 'clover.com')
            //  cy.get(google.firstSearchResultOnSearchPageEle,{timeout:30000}).should('contain.text',searchString)
            cy.screenshot("1-c-search-google")

        } else {
            cy.get('li[data-view-type="' + expectedResultPosition + '"]', { timeout: 30000 }).get('div[aria-label = "' + searchString + '"]', { timeout: 10000 })
                .should('not.exist')
            cy.screenshot("1-d-search-google")
        }

    }

}