describe('Dynamic Loading Page', () => {
    it('Wait for the hidden element to show', async () => {
        const btnStart = $('#start button');
        // const elementLoad = $('#loading');
        const textFinish = $('#finish h4');

        await browser.url('/dynamic_loading/1');
        await btnStart.click();
        // browser.pause(5000);
        // await elementLoad.waitForDisplayed();
        // await elementLoad.waitForDisplayed({reverse: true});
        await textFinish.waitForDisplayed();

        await expect(textFinish.toText()).toEqual('Hello World!');
    })
})