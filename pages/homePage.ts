import { Page } from '@playwright/test';

export class HomePage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://automationexercise.com');
    }

    async openLogin() {
        await this.page.click('a[href="/login"]');
    }

    async openProducts() {
        await this.page.click('a[href="/products"]');
    }

    async openContact() {

        await this.page.click('a[href="/contact_us"]');

        await this.page.waitForURL('**/contact_us');

    }

}