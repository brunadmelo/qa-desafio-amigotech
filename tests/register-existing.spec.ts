import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage';
import { SignupPage } from '../pages/signupPage';

test('Register with existing email', async ({ page }) => {

    const home = new HomePage(page);
    const signup = new SignupPage(page);

    await home.navigate();

    await home.openLogin();

    await signup.signup('Bruna', 'test@test.com');

    await expect(page.locator('text=Email Address already exist!')).toBeVisible();

});