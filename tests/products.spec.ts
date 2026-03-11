import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';

test('Verify all products', async ({ page }) => {

    const home = new HomePage(page);
    const products = new ProductsPage(page);

    await home.navigate();

    await home.openProducts();

    await products.openFirstProduct();

    await expect(page.locator('.product-information')).toBeVisible();

});