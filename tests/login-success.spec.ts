import { test, expect } from '@playwright/test';

test('Login with correct credentials', async ({ page }) => {
    const email = `user${Date.now()}@test.com`;
    const password = '123456';

    await page.goto('https://automationexercise.com');

    await page.click('a[href="/login"]');

    await page.fill('[data-qa="signup-name"]', 'Bruna');
    await page.fill('[data-qa="signup-email"]', email);
    await page.click('[data-qa="signup-button"]');

    await page.check('#id_gender1');
    await page.fill('#password', password);
    await page.selectOption('#days', '10');
    await page.selectOption('#months', '5');
    await page.selectOption('#years', '1994');

    await page.fill('#first_name', 'Bruna');
    await page.fill('#last_name', 'Melo');
    await page.fill('#address1', 'Street 1');
    await page.selectOption('#country', 'Canada');
    await page.fill('#state', 'Ontario');
    await page.fill('#city', 'Toronto');
    await page.fill('#zipcode', '12345');
    await page.fill('#mobile_number', '123456789');

    await page.click('[data-qa="create-account"]');
    await page.click('[data-qa="continue-button"]');

    await expect(page.locator('text=Logged in as')).toBeVisible();

    await page.click('a[href="/logout"]');

    await expect(page.locator('text=Login to your account')).toBeVisible();

    await page.fill('[data-qa="login-email"]', email);
    await page.fill('[data-qa="login-password"]', password);
    await page.click('[data-qa="login-button"]');

    await expect(page.locator('text=Logged in as')).toBeVisible();
});