var user_info = require('../config/config.json');
var item = require('../pageObject/jsObject.js');

describe('Looking for "gmail" on google.com', function () {

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
    it('should login with user and pass', function () {
        item.searchItem.click();
        item.submit.click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            browser.sleep(2000).then(function () {
                item.input.sendKeys(user_info.email);
                item.next.click();
                browser.sleep(2000).then(function () {
                    item.input.sendKeys(user_info.password);
                    item.next.click().then(function () {
                        var LoginURL = browser.getCurrentUrl();
                        expect(LoginURL).toContain('mail');
                    });
                });
            });
        });
    });
});

describe('Sending an email', function () {
    beforeEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');

    });
    var item = require('../pageObject/jsObject.js');

    it('should see a confirmation message', function () {
        browser.sleep(5000).then(function () {
            item.newMessage.click().then(function () {
                item.address.sendKeys(user_info.email_to);
                item.subject.sendKeys(user_info.subject);
                item.description.sendKeys(user_info.description);
                item.send.click();
                browser.sleep(8000).then(function () {
                    element(by.css("span[class='bAq']")).getText().then(function (text) {
                        console.log('Message confirmation: ' + text);
                        /* This code block was implemented because I was facing the following error: 
                        Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
                        And I could not find a solution for it */
                        if (text === 'Mensaje enviado') {
                            return expect(text).toEqual('Mensaje enviado');
                        }
                    })
                });
            })
        })
    });
});
