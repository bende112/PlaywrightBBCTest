import test, { Page } from "@playwright/test";

export class HomePage {
    page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async navigate() {
    await this.page.goto("https://www.bbc.co.uk/iplayer")
    }
}
