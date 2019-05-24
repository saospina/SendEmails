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
            browser.switchTo().window(handles[1]).then(function () {
                browser.getTitle().then(function (title) {
                    console.log('title before: ' + title);
                    item.input.sendKeys('sergos0617@gmail.com');
                    item.next.click().then(function () {
                        item.input.sendKeys('Colombia17@');
                        item.next.click();

                    })

                });
                
            });
        });





        /* browser.getTitle().then(function (title) {
            console.log('title before: ' + title);
        });
         browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]).then(function () {
                //do your stuff on the pop up window
                element(by.css("input[class='whsOnd zHQkBf']")).sendKeys('sergos0617@gmail.com');
                element(by.css("content[class='CwaK9']")).click();
            });
        }); */


        /* var handlePromise = browser.getAllWindowHandles();
        handlePromise.then(function (handles) {
            var popUpHandle = handles[1];
            browser.switchTo().window(popUpHandle);
            var popUpHandleFinal = browser.getWindowHandle();
            expect(popUpHandleFinal).toEqual(popUpHandle);
            
        }); */








    });
});
