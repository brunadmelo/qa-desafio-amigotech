import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';

test('Search product', async ({ page }) => {

    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.navigate();

    await home.openProducts();

    await products.searchProduct('dress');

    await expect(page.locator('text=SEARCHED PRODUCTS')).toBeVisible();

});