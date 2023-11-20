// tests/integration/integration.test.js
const puppeteer = require('puppeteer-core');
const path = require('path');

let browser;
let page;

beforeAll(async () => {
  // Specify the path to your Chrome executable
  const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'; // Update this path

  browser = await puppeteer.launch({ executablePath });
  page = await browser.newPage();
});

test('Example integration test for CSS styles', async () => {
  // Test your CSS styles using Puppeteer
  await page.goto(`file://${path.resolve(__dirname, '../../src/index.html')}`);
  const navBackgroundColor = await page.$eval('nav', (nav) => getComputedStyle(nav).backgroundColor);
  expect(navBackgroundColor).toBe('rgb(27, 27, 27)');
  // Add more CSS style assertions as needed
});

afterAll(async () => {
  await browser.close();
});
