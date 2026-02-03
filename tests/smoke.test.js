import { chromium } from 'playwright';

async function runSmoke() {
  const urls = ['http://127.0.0.1:5174/', 'http://localhost:5174/'];
  let page;
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  for (const url of urls) {
    page = await context.newPage();
    console.log('Trying', url);
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 5000 });
      console.log('Connected to', url);
      break;
    } catch (e) {
      console.log('Failed to connect to', url, e.message);
      await page.close();
      page = null;
    }
  }
  if (!page) throw new Error('Could not connect to dev server on any host');

  const consoleMessages = [];
  page.on('console', (msg) => consoleMessages.push({ type: msg.type(), text: msg.text() }));

  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Basic checks
  const title = await page.title();
  console.log('Title:', title);

  // Check navbar links
  const navLinks = await page.$$eval('.desktop-links a', els => els.map(e => ({ text: e.textContent.trim(), href: e.getAttribute('href') })));
  console.log('Nav links (desktop):', navLinks);

  // Toggle theme button
  const themeBtn = await page.$('.theme-toggle');
  if (themeBtn) {
    await themeBtn.click();
    console.log('Toggled theme');
  }

  // Open mobile menu
  await page.setViewportSize({ width: 375, height: 800 });
  const mobileMenuBtn = await page.$('.mobile-menu-btn');
  if (mobileMenuBtn) {
    await mobileMenuBtn.click();
    const mobileLinks = await page.$$eval('.mobile-menu a', els => els.map(e => e.textContent.trim()));
    console.log('Mobile links:', mobileLinks);
    // click first mobile link
    if (mobileLinks.length) {
      await page.click('.mobile-menu a');
      await page.waitForTimeout(500);
      console.log('Clicked mobile link and navigated');
    }
  }

  // Accessibility snapshot for hero heading
  const heroText = await page.$eval('.internal-hero h1', el => el.textContent.trim());
  console.log('Hero heading:', heroText);

  // Check for console errors
  const errors = consoleMessages.filter(m => m.type === 'error');
  console.log('Console errors count:', errors.length);
  if (errors.length) console.log(errors);

  // Check keyboard access to CTA button
  await page.goto(url);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  // get active element tag
  const active = await page.evaluate(() => document.activeElement?.outerHTML || 'none');
  console.log('Active element after tabs:', active.slice(0, 200));

  await browser.close();
}

runSmoke().catch(e => { console.error('Smoke test failed:', e); console.error(e && e.stack); process.exit(1); });