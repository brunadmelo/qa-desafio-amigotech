import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async checkout() {
        await expect(this.page.locator('.check_out')).toBeVisible({ timeout: 10000 });
        await this.page.locator('.check_out').click();
    }

    async placeOrder() {
        await expect(this.page.locator('textarea[name="message"]')).toBeVisible({ timeout: 10000 });
        await this.page.fill('textarea[name="message"]', 'Test order');
        await this.page.getByText('Place Order').click();
    }

    async fillPayment() {
        await this.page.fill('input[name="name_on_card"]', 'Bruna Melo');
        await this.page.fill('input[name="card_number"]', '4111111111111111');
        await this.page.fill('input[name="cvc"]', '123');
        await this.page.fill('input[name="expiry_month"]', '12');
        await this.page.fill('input[name="expiry_year"]', '2030');
        await this.page.click('#submit');
    }
}