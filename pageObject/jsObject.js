function getSearch() {
    this.searchItem = element(by.css("h3[class='LC20lb']"));
    this.URL = function () {
        browser.get('https://www.google.com/');
    };
    this.submit  = element(by.linkText("Acceder"));

    

}

module.exports = new getSearch();