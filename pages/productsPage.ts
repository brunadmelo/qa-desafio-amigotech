import { Page, expect } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {}

    async searchProduct(name: string) {
        await this.page.fill('#search_product', name);
        await this.page.click('#submit_search');
    }

    async addFirstProductToCartAndOpenCart() {
        await this.page.locator('.add-to-cart').first().click({ force: true });

        const cartModal = this.page.locator('#cartModal');
        await expect(cartModal).toBeVisible({ timeout: 10000 });

        await cartModal.getByText('View Cart').click();
    }
}