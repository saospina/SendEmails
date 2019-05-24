
describe('Name of the group', function() {
    var item = require('../pageObject/jsObject.js')
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        item.URL();
    });
    it('something', function() {
        element.all(by.css("ul[class='h-c-header__cta-list h-c-header__cta-list--tier-two']"))
    .all(by.css("li[class='h-c-header__nav-li-link']")).then(function (params) {
        console.log(params);
        
    })
    });
        
});
    