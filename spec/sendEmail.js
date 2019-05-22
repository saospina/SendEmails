describe('Sending emails through Gmail', function() {
    it('should open Google page', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
        element(by.css("input[class='gLFyf gsfi']")).sendKeys('gmail');
        element(by.css("input[class='gLFyf gsfi']")).sendKeys(Key.ENTER);
        
        
    });
});