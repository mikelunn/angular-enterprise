import { AngularEnterprisePage } from './app.po';

describe('angular-enterprise App', () => {
  let page: AngularEnterprisePage;

  beforeEach(() => {
    page = new AngularEnterprisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
