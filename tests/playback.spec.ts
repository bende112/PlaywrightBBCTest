import { test, expect } from '@playwright/test';
import { baseURL } from '../playwright.config';
import { tags } from '../support/lib/constants';
import { BasePage } from '../support/lib/model/basePage';
import { HomePage } from '../support/lib/model/homePage';
import { PageSections } from '../support/pageobject/pages/pageSections';
import { PlaybackProgram } from '../support/pageobject/pages/playback';


test.describe(`Playback page ${tags.core}`, () => {
  let pageSections: PageSections;
  let playbackProgram: PlaybackProgram;
  let basePage: BasePage;
  let homePage: HomePage;

  test.beforeEach(async ({ page}) => {
    pageSections = new PageSections(page);
    playbackProgram = new PlaybackProgram(page);
    basePage = new BasePage(page);
    homePage = new HomePage(page);
    await homePage.navigate();
});

test(`User clicks an program then clicks an episode ${tags.core}`, async () => {
    await playbackProgram.clickEpisode('juice');
})

test(`User navigates to bbc sign in page when clicks an episode play button ${tags.core}`, async () => {
    await playbackProgram.signInPageDisplayed();
})
});
