describe('Looking for "gmail" on google.com', function () {
    var item = require('../pageObject/jsObject.js')

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        item.URL();
    });

    it('should select Gmail - Google option', function () {
        element(by.css("input[class='gLFyf gsfi']")).sendKeys('gmail');
        element(by.css("input[class='gLFyf gsfi']")).sendKeys(protractor.Key.ENTER);
        var searching = item.searchItem;
        expect(searching.getText()).toEqual('Gmail - Google');

    });
});

describe('Login into Gmail', function () {
    var item = require('../pageObject/jsObject.js')
    it('should login with user and pass', function () {
        item.searchItem.click();
        item.submit.click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            browser.sleep(3000).then(function () {
                item.input.sendKeys('@gmail.com');
                item.next.click();
                browser.sleep(3000).then(function () {
                    item.input.sendKeys('xxxxxx');
                    item.next.click().then(function () {
                        var LoginURL = browser.getCurrentUrl();
                        expect(LoginURL).toContain('mail');
                    });
                });
            });
        });
    });
});
