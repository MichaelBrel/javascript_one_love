const MainPage = require('../../main/pages/MainPage');
let mainPage = new MainPage();

describe('main page', function () {

  beforeEach(function () {
    browser.driver.manage().window().maximize();
  });

  it('when usb radio button is clicked it should be displayed at navigation bar', function () {
    mainPage.open()
      .then(() => {
        return mainPage.clickUsbRadioButton()
      })
      .then(expect(mainPage.navigationBarContainsTag("USB")).toEqual(true));
  });

});
