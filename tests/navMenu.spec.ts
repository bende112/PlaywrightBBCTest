import { test, expect } from '@playwright/test';
import { baseURL } from '../playwright.config';
import { tags } from '../support/lib/constants';
import { BasePage } from '../support/lib/model/basePage';
import { HomePage } from '../support/lib/model/homePage';
import { NavigationMenu } from '../support/pageobject/pages/navigationMenu';
import { PlaybackProgram } from '../support/pageobject/pages/playback';


test.describe(`BBC iPlayer navigation menu ${tags.core}`, () => {
    let navigationMenu: NavigationMenu;
    let playbackProgram: PlaybackProgram;
    let basePage: BasePage;
    let homePage: HomePage;

  test.beforeEach(async ({ page}) => {
    navigationMenu = new NavigationMenu(page);
    playbackProgram = new PlaybackProgram(page);
    basePage = new BasePage(page);
    homePage = new HomePage(page);
    await homePage.navigate();
});

test(`User clicks channels on the navigation menu and select a channels ${tags.core}`, async ({ page }) => {
    await navigationMenu.selectChannel('THREE');
});

test(`User clicks channels on the navigation menu and select another channels ${tags.core}`, async ({ page }) => {
  await navigationMenu.selectChannel('ONE');
});
});
