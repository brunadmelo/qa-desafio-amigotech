import { test } from '../fixtures/userFixture';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';

test('Place Order', async ({ page, user }) => {
    const home = new HomePage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await home.navigate();
    await home.openProducts();

    await products.addFirstProductToCartAndOpenCart();

    await cart.checkout();
    await cart.placeOrder();
    await cart.fillPayment();

    await expect(page.locator('text=Order Placed!')).toBeVisible();
});