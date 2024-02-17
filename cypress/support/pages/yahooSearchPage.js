
const searchInputEle = 'input#ybar-sbq';
const firstSearchResultEle = 'li[pos="0"]';
const firstSearchResultOnSearchPageEle = 'a.va-bot.bcan1cb div span'

export class YahooSearchPage {

    /**
        * search for a given text
        * @param {*} searchString 
        */
    searchFor(searchString) {

        cy.get(searchInputEle, { timeout: 10000 }).should('exist').type(searchString)
        //cy.screenshot("2-a-search-yahoo")


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
            cy.get(firstSearchResultEle).get('span._yb_17olu b._yb_j38nd', { timeout: 30000 }).eq(0).should('have.text', searchString)
                .should('exist')
            // cy.screenshot("2-b-search-yahoo")
            cy.get(searchInputEle).type("{enter}")
            cy.get(firstSearchResultOnSearchPageEle).eq(0).should('contain.text', searchString)
            //  cy.screenshot("2-c-search-yahoo")
        } else {
            cy.get(firstSearchResultEle)
                .should('not.exist')
            // cy.screenshot("2-d-search-yahoo")
        }

    }

};