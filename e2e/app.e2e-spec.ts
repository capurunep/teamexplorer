import { TeamproPage } from './app.po';

describe('teampro App', function() {
  let page: TeamproPage;

  beforeEach(() => {
    page = new TeamproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
