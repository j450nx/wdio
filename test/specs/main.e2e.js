describe('Main Page', () => {
    // npx wdio --spec .\test\specs\main.e2e.js to run this file alone
    it('Verify list items is greater than or equal to 1', () => {
        browser.url('/');

        const listExamples = $$('ul li'); //findElements with $$

        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});