const mainPage = require('../../main/pages/MainPage');
const ssdPage = require('../../main/pages/SsdPage');

describe('SSD page', function () {

  beforeEach(function () {
    browser.driver.manage().window().maximize();
  });

  it('should contain only SSD devices', function () {
    mainPage.open()
      .then(() => mainPage.clickSsdRef())
      .then(expect(ssdPage.allProductTitlesContainString("SSD")).toEqual(true));
  });

  it('when filter pannels radio button is clicked and clear button is clicked the radio button choice should disappear', function() {
    mainPage.open()
    .then(() => mainPage.clickSsdRef())
    .then(() => ssdPage.clickMsataRadioButton())
    .then(() => ssdPage.clickClearButton())
    .then(expect(ssdPage.allRadioButtonsPressed()).toEqual(false));
  });

});
