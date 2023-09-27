import { expect, Locator, Page } from "@playwright/test";

export class NavigationMenu{
    page: Page;

    private readonly navMenu: Locator;
    private readonly subNavMenu: Locator;
    private readonly channels: Locator;


    constructor(page: Page) {
        this.page = page;

        this.navMenu = page.locator('.navigation__item-container');
        this.channels = page.getByLabel('Channels', { exact: true });
        this.subNavMenu = page.locator('ul.scrollable-nav__track');
    }

    async selectChannel (channelName) {
        await this.channels.click();
        await this.subNavMenu.locator('Li', {
            hasText:channelName
        }).click();
    }
}
