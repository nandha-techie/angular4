import { SocialPage } from './app.po';

describe('social App', () => {
  let page: SocialPage;

  beforeEach(() => {
    page = new SocialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
