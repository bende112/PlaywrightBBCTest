import { test, expect } from '@playwright/test';
import { baseURL, timeout } from '../playwright.config';
import { tags } from '../support/lib/constants';
import { BasePage } from '../support/lib/model/basePage';
import { HomePage } from '../support/lib/model/homePage';
import { IPlayerHomePage } from '../support/pageobject/pages/bbchomePage';
import { NavigationMenu } from '../support/pageobject/pages/navigationMenu';
import { PageSections } from '../support/pageobject/pages/pageSections';
import { PlaybackProgram } from '../support/pageobject/pages/playback';


test.describe(`Carousels pages ${tags.core}`, () => {
  let pageSections: PageSections;
  let iPlayerHomePage: IPlayerHomePage;
  let navigationMenu: NavigationMenu;
  let playbackProgram: PlaybackProgram;
  let basePage: BasePage;
  let homePage: HomePage;

  test.beforeEach(async ({ page}) => {
    pageSections = new PageSections(page);
    iPlayerHomePage = new IPlayerHomePage(page);
    navigationMenu = new NavigationMenu(page);
    playbackProgram = new PlaybackProgram(page);
    basePage = new BasePage(page);
    homePage = new HomePage(page);
    await homePage.navigate();
});

test(`User scroll right and then left on a carousel for more item ${tags.core}`, async ({ page }) => {
   await pageSections.carouselItem();
});

test(`A section with carousel is displayed with section title ${tags.core}`, async ({ page }) => {
   await pageSections.selectProgrammes('New & Trending',1);
});

test(`User verify that more than 4 sections are displayed with section header  ${tags.core}`, async ({ page }) => {
   await pageSections.selectSections();
});
});
