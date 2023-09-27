import { test, expect } from '@playwright/test';
import { baseURL } from '../playwright.config';
import { tags } from '../support/lib/constants';
import { BasePage } from '../support/lib/model/basePage';
import { HomePage } from '../support/lib/model/homePage';
import { IPlayerHomePage } from '../support/pageobject/pages/bbchomePage';
import { PageSections } from '../support/pageobject/pages/pageSections';
import { PlaybackProgram } from '../support/pageobject/pages/playback';


test.describe(`BBC iPlayer Home page ${tags.core}`, () => {
  let pageSections: PageSections;
  let iPlayerHomePage: IPlayerHomePage;
  let basePage: BasePage;
  let homePage: HomePage;
  let playbackProgram: PlaybackProgram;

  test.beforeEach(async ({ page}) => {
    pageSections = new PageSections(page);
    iPlayerHomePage = new IPlayerHomePage(page);
    playbackProgram = new PlaybackProgram(page);
    basePage = new BasePage(page);
    homePage = new HomePage(page);
    await homePage.navigate();
});

test(`User navigate to bbc iplayer home page ${tags.core}`, async ({ page }) => {
  await iPlayerHomePage.isLogoDisplayed();

});

test(`HomePage title is displayed ${tags.core}`, async ({ page }) => {
  await playbackProgram.assertTitleContains('BBC iPlayer - Home');
});

});
