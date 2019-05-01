import { CarlosPage } from './app.po';

describe('carlos App', function() {
  let page: CarlosPage;

  beforeEach(() => {
    page = new CarlosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
