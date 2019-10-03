class ElementArrayFinderHandler {

    getTextArray(elementArrayFinder) {
        return elementArrayFinder
            .map((webElement) => {
                return webElement.getText()
            });
    }

    getAttributes(elementArrayFinder, attributeName) {
        return elementArrayFinder
            .map((webElement) => {
                return webElement.getAttribute(attributeName)
            });
    }
}

module.exports = ElementArrayFinderHandler;
