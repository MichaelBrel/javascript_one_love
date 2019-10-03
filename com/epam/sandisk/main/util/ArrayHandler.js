class ArrayHandler {

    filterByString(array, inputString) {
        return array.filter((string) => {
            return string.includes(inputString)
        });
    }

    allElementsContainString(array, inputString) {
        return array.filter((string) => {
            return !string.includes(inputString)
        }).length === 0;
    }
}

module.exports = ArrayHandler;
