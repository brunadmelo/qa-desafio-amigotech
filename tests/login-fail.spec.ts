import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';

test('Login with incorrect credentials', async ({ page }) => {

    const home = new HomePage(page);
    const login = new LoginPage(page);

    await home.navigate();

    await home.openLogin();

    await login.login('wrong@test.com', 'wrongpass');

    await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();

});