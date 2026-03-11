import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage';
import { SignupPage } from '../pages/signupPage';

import { generateEmail } from '../utils/testData';

test('Register user', async ({ page }) => {

    const home = new HomePage(page);
    const signup = new SignupPage(page);

    const email = generateEmail();

    await home.navigate();

    await home.openLogin();

    await signup.signup('Bruna', email);

    await signup.fillAccountDetails();

    await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible();

    await page.click('text=Continue');

});