import { AppPage } from './app.po';

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
        })
      })
    })
  });
});
