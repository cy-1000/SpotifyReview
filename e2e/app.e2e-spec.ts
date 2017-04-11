import { SpotifyReviewPage } from './app.po';

describe('spotify-review App', function() {
  let page: SpotifyReviewPage;

  beforeEach(() => {
    page = new SpotifyReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
