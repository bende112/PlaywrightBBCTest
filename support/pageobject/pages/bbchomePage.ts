import { expect, Locator, Page } from "@playwright/test";

export class IPlayerHomePage {
    page: Page;

    private readonly pageTitle: Locator;
    private readonly iplayerLogo: Locator;


    constructor(page: Page) {
        this.page = page;

        this.iplayerLogo = page.locator(".navigation__logo__svg");
        this.pageTitle = page.getByText('text=BBC iPlayer - Home');
    }

    async isPageTitleDisplayed() {
        await this.pageTitle.isVisible();
    }

    async isLogoDisplayed() {
        await this.iplayerLogo.isVisible();
    }
}
