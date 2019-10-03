const Wait = require('../util/Wait');
let wait = new Wait();
const Actions = require('../util/Actions');
let actions = new Actions();
const ElementArrayFinderHandler = require('../util/ElementArrayFinderHandler');
let elementArrayFinderHandler = new ElementArrayFinderHandler();
const ArrayHandler = require('../util/ArrayHandler');
let arrayHandler = new ArrayHandler();

class SsdPage {
    constructor() {
        this.productTitles = element.all(by.css("[ng-bind-html='product.title']"));
        this.clearButton = element(by.css(".hide-below2 a.btn"));
        this.mSataRadioButton = element(by.xpath("//label//*[contains(text(),'mSATA')]"));
        this.welcomeHeader = element(by.xpath("//h1[contains(text(), 'These Are the Drives')]"));
        this.allRadioButtons = element.all(by.css(".filter-panel.ng-scope input"));
    }

    allProductTitlesContainString(string) {
        return elementArrayFinderHandler.getTextArray(this.productTitles)
            .then((arr) => {
                return arrayHandler.allElementsContainString(arr, string)
            });
    }

    clickMsataRadioButton() {
        return actions.moveAndClick(this.mSataRadioButton);
    }

    clickClearButton() {
        return this.clearButton.click();
    }

    allRadioButtonsPressed() {
        return elementArrayFinderHandler.getAttributes(this.allRadioButtons, "class")
            .then((arr) => {
                return arrayHandler.filterByString(arr, "ng-valid ng-dirty ng-touched ng-valid-parse")
            })
            .then((arr) => {
                return arr.length > 0
            });
    }

}

module.exports = SsdPage;
