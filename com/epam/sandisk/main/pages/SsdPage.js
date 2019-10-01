class SsdPage {
    constructor() {
        this.productTitles = element(by.xpath("//*[@ng-bind-html='product.title']"));
    }

    productTitleContainsText(text) {
        return this.productTitles
            .getText()
            .then((x) => x.includes(text));
    }
}

module.exports = new SsdPage();
