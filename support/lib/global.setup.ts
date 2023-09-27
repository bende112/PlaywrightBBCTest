import { chromium, FullConfig } from "@playwright/test";
import { BasePage } from "./model/basePage";

async function globalSetup(config:FullConfig) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const basePage = new BasePage(page);

    await basePage.homePage.navigate()
    await browser.close();
}

export default globalSetup;
