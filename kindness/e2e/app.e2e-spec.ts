import { KindnessPage } from './app.po';

describe('kindness App', function() {
  let page: KindnessPage;

  beforeEach(() => {
    page = new KindnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
