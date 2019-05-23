function getSearch() {
    this.searchItem = element(by.css("h3[class='LC20lb']"));
    this.URL = function () {
        browser.get('https://www.google.com/');
    };
    this.submit = element.all(by.css("ul[class='h-c-header__cta-list h-c-header__cta-list--tier-two']"))
    .all(by.css("li[class='h-c-header__nav-li-link']"));
}

module.exports = new getSearch();