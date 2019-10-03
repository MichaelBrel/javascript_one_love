class Actions {
    constructor() {

    }

    moveToElement(element) {
        return Promise.resolve(() => element.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        }));
    }
}

module.exports = new Actions();
