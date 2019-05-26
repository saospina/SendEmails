function getSearch() {
    this.searchItem = element(by.css("h3[class='LC20lb']"));
    this.URL = function () {
        browser.get('https://www.google.com/');
    };
    this.submit = element(by.linkText("Acceder"));
    
    this.input = element(by.css("input[class='whsOnd zHQkBf']"));
    this.next = element(by.css("content[class='CwaK9']"));
    this.address = element(by.css("textarea[class='vO']"));
    this.subject = element(by.css("input[class='aoT']"));
    this.description = element(by.css("div[class='Am Al editable LW-avf']"));

    

}

module.exports = new getSearch();