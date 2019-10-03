const wait = require('../util/Wait');
const actions = require('../util/Actions');

class MainPage {
    constructor() {
        this.ssdRef = element(by.xpath("//div[@id='navbar']//a[@href='/home/ssd.html']"));
        this.usbRadioButton = element(by.xpath("//label//*[contains(text(),'USB')]"));
    }

    open() {
        return browser.get('https://www.sandisk.com');
    }

    clickUsbRadioButton() {
        return Promise.resolve(actions.moveToElement(this.usbRadioButton))
            .then(() => this.usbRadioButton.click());
    }

    navigationBarContainsTag(tag) {
        let searchElement = element(by.xpath(`//div[@class='subnav fixed']//*[contains(text(),'${tag}')]`));
        return Promise.resolve(wait.waitElementToBeVisible(searchElement), 5000)
            .then(() => searchElement.getText())
            .then((text) => text === tag);
    }

    clickSsdRef() {
        return this.ssdRef.click();
    }

}

module.exports = new MainPage();
