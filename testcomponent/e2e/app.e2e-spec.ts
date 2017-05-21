import { TestcomponentPage } from './app.po';

describe('testcomponent App', () => {
  let page: TestcomponentPage;

  beforeEach(() => {
    page = new TestcomponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
