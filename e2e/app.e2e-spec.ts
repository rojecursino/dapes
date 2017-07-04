import { WebdapesPage } from './app.po';

describe('webdapes App', () => {
  let page: WebdapesPage;

  beforeEach(() => {
    page = new WebdapesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
