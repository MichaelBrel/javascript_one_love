class Wait {
    constructor() {
        this.EC = protractor.ExpectedConditions;
    }

    waitElementToBeVisible(element, timeout) {
        return browser.wait(this.EC.visibilityOf(element), timeout);
    }

    waitElementToBeClickable(element, timeout) {
        return browser.wait(this.EC.elementToBeClickable(element), timeout);
    }
}

module.exports = new Wait();
