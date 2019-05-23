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
        item.submit.click().then(function (handles) {
            popUpHandle = handles[1];
            var handle = browser.switchTo().window(popUpHandle);
            handle = browser.getWindowHandle();
            expect(handle).toEqual(popUpHandle);
            browser.driver.executeScript('window.focus();');
        });
        /* .then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]);
                browser.getTitle().then(function (title) {
                    console.log("Title is : " + title);
                });
            });

        }); */
    });
});
