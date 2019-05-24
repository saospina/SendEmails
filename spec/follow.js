describe('login', function () {
    var item = require('../pageObject/jsObject.js')

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        item.URL();
    });
    it('should behave...', function () {
        element(by.css("input[class='whsOnd zHQkBf']")).sendKeys('sergos0617@gmail.com');
        element(by.css("content[class='CwaK9']")).click();
        element(by.css("input[class='whsOnd zHQkBf']")).sendKeys('Colombia03@');
        element(by.css("content[class='CwaK9']")).click();
    });
});