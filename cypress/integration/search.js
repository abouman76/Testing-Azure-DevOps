describe('Search Books Azure DevOps Tutorial', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    const bookOne = 'Agile Testing';

    it('Should return one book with title Agile Testing', () => {

        // search for the book via searchbar
        cy.get('#searchBar')
            .type(bookOne);

        cy.get('li:not(.ui-screen-hidden')
            .should('have.length', 1);

        cy.get('h2').should('contain.text', bookOne, `${bookOne} should be visiblenpx`)
    });

    it('Should search for books with title that contains: "test"', () => {
        const testTitle = 'Test';
        const expectedTitles = [
            'Test Automation in the Real World',
            'Experiences of Test Automation',
            'Agile Testing',
            'How Google Tests Software',
            'Java For Testers'
        ]
        const expectedCountedTitles = expectedTitles.length

        cy.get('#searchBar')
            .type(testTitle)

        cy.get('li:not(.ui-screen-hidden')
            .should('have.length', expectedCountedTitles, `There should be exactly ${expectedCountedTitles} book(s) visible`);

        // verify book titles
        expectedTitles.forEach(b => cy.get('h2').should('contain.text', b, `${b} should be visible`));
    });


})
