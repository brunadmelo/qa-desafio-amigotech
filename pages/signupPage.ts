import { Page } from '@playwright/test';

export class SignupPage {

    constructor(private page: Page) {}

    async signup(name: string, email: string) {

        await this.page.fill('input[data-qa="signup-name"]', name);
        await this.page.fill('input[data-qa="signup-email"]', email);

        await this.page.click('button[data-qa="signup-button"]');
    }

    async fillAccountDetails() {

        await this.page.check('#id_gender1');
        await this.page.fill('#password', '123456');

        await this.page.selectOption('#days', '10');
        await this.page.selectOption('#months', '5');
        await this.page.selectOption('#years', '1994');

        await this.page.fill('#first_name', 'Bruna');
        await this.page.fill('#last_name', 'Melo');

        await this.page.fill('#address1', 'Street 123');

        await this.page.selectOption('#country', 'Canada');

        await this.page.fill('#state', 'State');
        await this.page.fill('#city', 'City');
        await this.page.fill('#zipcode', '12345');
        await this.page.fill('#mobile_number', '999999999');

        await this.page.click('button[data-qa="create-account"]');
    }

}