import { AngularPractices1Page } from './app.po';

describe('angular-practices1 App', () => {
  let page: AngularPractices1Page;

  beforeEach(() => {
    page = new AngularPractices1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
