let mainPage = require('../../main/pages/MainPage');
let ssdPage = require('../../main/pages/SsdPage');

describe('SSD page', function () {

  beforeEach(function () {
    browser.driver.manage().window().maximize();
  });

  it('should contain only SSD devices', function () {
    mainPage.open()
      .then(() => mainPage.clickSsdRef())
      .then(expect(ssdPage.productTitleContainsText("SSD")).toEqual(true));
  });

});
