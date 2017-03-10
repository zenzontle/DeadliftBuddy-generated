import { DeadliftBuddy.AppPage } from './app.po';

describe('deadlift-buddy.app App', () => {
  let page: DeadliftBuddy.AppPage;

  beforeEach(() => {
    page = new DeadliftBuddy.AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
