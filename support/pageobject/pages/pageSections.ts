import { expect, Locator, Page } from "@playwright/test";
import { count } from "console";
import { text } from "stream/consumers";

export class PageSections{
    page: Page;

    private readonly newAndTrendingSection: Locator;
    private readonly entertainment: Locator;
    private readonly carousel: Locator;
    private readonly carouselRightArrow: Locator;
    private readonly carouselLeftArrow: Locator;
    private readonly section: Locator;


    constructor(page: Page) {
        this.page = page;

        this.newAndTrendingSection = page.getByRole('heading', { name: 'Stream Every Episode' });
        this.entertainment = page.getByRole('heading', { name: 'Entertainment' });
        this.carousel = page.locator("(//div[@class='carrousel__inner'])[1]");
        this.carouselRightArrow = page.getByLabel('New & Trending', { exact: true }).getByRole('button', { name: 'Scroll carousel right' });
        this.carouselLeftArrow = page.getByLabel('New & Trending', { exact: true }).getByRole('button', { name: 'Scroll carousel left' });
        this.section = page.locator("//section[@aria-label='New & Trending']");
    }

    async selectProgrammes (sectionName, count) {
        const carouselItem = await this.carousel;
        await expect(carouselItem).toHaveCount(count);
        await this.carousel.locator('h2', {
            hasText:sectionName
        })
        console.log(sectionName.innerText);
    }

    async pageSection (headerName, header) {
        const sectionItem = await this.section;
        await expect(sectionItem).toHaveCount(header);
        await this.carousel.locator('h2', {
            hasText:headerName
        })
        console.log(headerName.innerText);
    }

    async selectSections () {
        await this.page.waitForSelector('section.section h2', {timeout:1000});
        const sections = await this.page.$$('section.section h2');
        console.log(sections.length)

        for await (const section of sections) {
            console.log(await section.innerText());
        }
    }

    async isNewAndTrendingSectionDisplayed() {
        await this.newAndTrendingSection.isVisible();
    }

    async scrollToEntertainmentSection() {
        await this.entertainment.scrollIntoViewIfNeeded();
    }

    async sectionDisplayed() {
        await expect(this.section).toBeVisible();
        console.log(this.section);
    }

    async carouselItem() {
        await this.carousel,{timeout:1000};
        await this.carouselRightArrow.click();
        await this.carouselRightArrow.click();
    }
}
