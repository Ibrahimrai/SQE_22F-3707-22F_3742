const { Given, When, Then, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

let page;

Given('I navigate to the login page', async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://github.com/login');
});

When('I fill in the username and password', async () => {
  await page.fill('input[name="login"]', 'Ibrahimrai');
  await page.fill('input[name="password"]', '7825211#Ok');
});

When('I click the login button', async () => {
  await page.click('input[name="commit"]');
});

Then('I should see the dashboard page', async () => {
  await expect(page).toHaveURL('https://github.com/');
  const dashboard = page.locator('span.AppHeader-context-item-label:text("Dashboard")');
  await expect(dashboard).toBeVisible();
});

// Capture screenshots on test failure
After(async function (scenario) {
  if (scenario.result.status === 'failed') {
    const screenshot = await page.screenshot();
    const screenshotPath = path.resolve(`./reports/screenshots/${scenario.pickle.name}.png`);
    fs.writeFileSync(screenshotPath, screenshot);
    this.attach(screenshot, 'image/png');
  }
});
