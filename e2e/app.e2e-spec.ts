import { AppPage } from './app.page';
import { of } from 'rxjs/observable/of';

describe('ng fitness App', () => {
  let page: AppPage;

  beforeEach((done) => {
    page = new AppPage();

    page.navigateTo().then(() => done());
  });

  describe('give data loaded', () => {
    describe('when nothing has changed', () => {
      it('should have total price equals default one', () => {
        const defaultPrice = 299;

        return page.getPrice().then(price => {
          return expect(price).toEqual(defaultPrice);
        });
      });

      describe('when two club access is selected', () => {
        beforeEach((done) => {
          page = new AppPage();
        
          page.navigateTo()
            .then(() => page.selectTwoClubAccess())
            .then(() => done());
        });

        it('should reflect this change in total price', () => {
          const defaultPrice = 349;

          return page.getPrice().then(price => {
            return expect(price).toEqual(defaultPrice);
          });
        });
      });
    });
  });
});
