import { test } from '../fixtures/userFixture';
import { expect } from '@playwright/test';

test('Logout user', async ({ page, user }) => {
    await page.goto('https://automationexercise.com');

    await expect(page.locator('a[href="/logout"]')).toBeVisible();

    await page.click('a[href="/logout"]');

    await expect(page.locator('text=Login to your account')).toBeVisible();
});