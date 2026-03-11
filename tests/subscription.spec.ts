import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/homePage';

import { generateEmail } from '../utils/testData';

test('Subscription', async ({ page }) => {

    const home = new HomePage(page);

    await home.navigate();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const email = generateEmail();

    await page.fill('#susbscribe_email', email);

    await page.click('#subscribe');

    await expect(page.locator('text=You have been successfully subscribed!')).toBeVisible();

});