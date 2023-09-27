import test, { Page } from "@playwright/test";

export class BasePage {
    page: Page;
    homePage: any;

    constructor (page: Page) {
        this.page = page;
    }
}
