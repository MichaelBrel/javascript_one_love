class Actions {
    constructor() {

    }
    moveToElement(element) {
        return browser.executeScript("arguments[0].scrollIntoView();", element);
    }
}

module.exports = new Actions();
