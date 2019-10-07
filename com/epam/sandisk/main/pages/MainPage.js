const Wait = require('../util/Wait');
let wait = new Wait();
const Actions = require('../util/Actions');
let actions = new Actions();

class MainPage {
    constructor() {
        this.ssdRef = element(by.css("div#navbar a[href='/home/ssd.html']"));
        this.usbRadioButton = element(by.xpath("//label//*[contains(text(),'USB')]"));
    }

    open() {
        return browser.get(browser.baseUrl);
    }

    clickUsbRadioButton() {
        return actions.moveAndClick(this.usbRadioButton);
    }

    navigationBarContainsTag(tag) {
        let searchElement = element(by.xpath(format(this.navigationBarElementXpath, tag)));
        return wait.waitElementToBeVisible(searchElement)
            .then(() => {
                return searchElement.getText()
            })
            .then((text) => {
                return text === tag
            });
    }

    clickSsdRef() {
        return this.ssdRef.click();
    }

}

module.exports = MainPage;
