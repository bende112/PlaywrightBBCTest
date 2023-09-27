import { expect, Locator, Page } from "@playwright/test";
import { time } from "console";
import { timeout } from "../../../playwright.config";

export class PlaybackProgram{
    page: Page;

    private readonly watchNow: Locator;
    private readonly pageContent: Locator;
    private readonly startWatching: Locator;
    private readonly playEpisode: Locator;
    private readonly signInPage: Locator;
    private readonly episode: Locator;

    constructor(page: Page) {
        this.page = page;

        this.watchNow = page.locator("//span[text()='Watch now']");
        this.pageContent = page.locator("//h1[text()='Celebrity Race Across the World']");
        this.startWatching = page.locator("//span[text()='Start watching']");
        this.playEpisode = page.locator('.play-cta__icon');
        this.signInPage = page.locator("//h2[text()='Sign in to your BBC account']");
    }

    async isPageContentDisplayed() {
      await expect(this.pageContent).toBeVisible();
    }

    async isSignInPageDisplayed() {
        await this.signInPage.isVisible();
      }

    async clickEpisode(title) {
        await this.watchNow.click();
        await this.startWatching.click();
        await this.playEpisode.click();
      }

    async signInPageDisplayed() {
        await this.watchNow.click();
        await this.startWatching.click();
        await {timeout:1000}
        await this.playEpisode.click();
        await expect(this.signInPage).toBeVisible()

      }

      async assertTitleContains(title:string) {
        const pageTitle = await this.page.title();
        await expect(pageTitle).toContain(title);
    }
}
