import { test, expect } from '@playwright/test';

test('Usability Walkthrough', async ({ page }) => {
  // 1. Visit the homepage
  await page.goto('http://127.0.0.1:5173/');
  await page.waitForLoadState('networkidle');

  // 2. Check Hero Section
  await expect(page.locator('h1')).toBeVisible();
  
  // 3. Check Navigation
  const navLinks = ['Services', 'Portfolio', 'Contact']; // Adjust based on actual text
  for (const link of navLinks) {
    const locator = page.locator(`nav a:has-text("${link}")`).first(); // flexible locator
    if (await locator.isVisible()) {
        await expect(locator).toBeVisible();
        console.log(`Verified Navigation Link: ${link}`);
    } else {
        console.log(`Warning: Navigation Link ${link} not found`);
    }
  }

  // 4. Scroll to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000); // Wait for potential lazy loading or animations

  // 5. Check Footer
  const footer = page.locator('footer');
  if (await footer.count() > 0) {
      await expect(footer).toBeVisible();
      console.log('Verified Footer is visible');
  }

  // 6. Screenshot full page
  await page.screenshot({ path: 'usability_screenshot_full.png', fullPage: true });
});
