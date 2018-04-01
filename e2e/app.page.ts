import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPrice() {
    return element(by.id('totalPrice')).getText().then((priceText) => {
      return parseFloat(/\d+/.exec(priceText)[0]);
    });
  }

  selectTwoClubAccess() {
    return element(by.id('clubAccessContainer')).all(by.tagName('li')).get(1).click();
  }
}
