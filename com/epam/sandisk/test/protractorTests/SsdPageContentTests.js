const MainPage = require('../../main/pages/MainPage');
let mainPage = new MainPage();
const SsdPage = require('../../main/pages/SsdPage');
let ssdPage = new SsdPage();

describe('SSD page content tests', function () {

  beforeEach(function () {
    browser.driver.manage().window().maximize();
  });

  it('should contain only SSD devices', function () {
    mainPage.open()
      .then(() => mainPage.clickSsdRef())
      .then(expect(ssdPage.allProductTitlesContainString("SSD")).toEqual(true));
  });

});
