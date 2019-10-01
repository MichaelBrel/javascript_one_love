let mainPage = require('../../main/pages/MainPage');

describe('main page', function () {

  beforeEach(function () {
    browser.driver.manage().window().maximize();
  });

  it('when usb radio button is clicked it should be displayed at navigation bar', function () {
    mainPage.open()
      .then(() => mainPage.clickUsbRadioButton())
      .then(expect(mainPage.navigationBarContainsTag("USB")).toEqual(true));
  });

});
