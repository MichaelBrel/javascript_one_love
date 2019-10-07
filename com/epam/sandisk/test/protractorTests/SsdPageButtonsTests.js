const MainPage = require('../../main/pages/MainPage');
let mainPage = new MainPage();
const SsdPage = require('../../main/pages/SsdPage');
let ssdPage = new SsdPage();

describe('SSD page buttons tests', function () {

  beforeEach(function () {
    browser.driver.manage().window().maximize();
  });

  it('when filter pannels radio button is clicked and clear button is clicked the radio button choice should disappear', function () {
    mainPage.open()
      .then(() => {
        return mainPage.clickSsdRef()
      })
      .then(() => {
        return ssdPage.clickMsataRadioButton()
      })
      .then(() => {
        return ssdPage.clickClearButton()
      })
      .then(expect(ssdPage.allRadioButtonsPressed()).toEqual(false));
  });

});
