import { Proyecto1Page } from './app.po';

describe('proyecto1 App', () => {
  let page: Proyecto1Page;

  beforeEach(() => {
    page = new Proyecto1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
