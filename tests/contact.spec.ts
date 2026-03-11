import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactPage } from '../pages/contactPage';

test('Contact us form', async ({ page }) => {

    const home = new HomePage(page);
    const contact = new ContactPage(page);

    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('ads') ||
            url.includes('analytics')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });

    await home.navigate();

    await home.openContact();

    await contact.fillForm();

    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await contact.submit();

    await expect(
        page.locator('#contact-page .alert-success')
    ).toBeVisible({ timeout: 15000 });

});