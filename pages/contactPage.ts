import { Page } from '@playwright/test';

export class ContactPage {

    constructor(private page: Page) {}

    async fillForm() {

        await this.page.locator('input[name="name"]').fill('Bruna');
        await this.page.locator('input[name="email"]').fill('bruna@test.com');
        await this.page.locator('input[name="subject"]').fill('Test Subject');
        await this.page.locator('textarea[name="message"]').fill('This is a test message');

    }

    async submit() {

        await this.page.locator('input[name="submit"]').click();

    }

}