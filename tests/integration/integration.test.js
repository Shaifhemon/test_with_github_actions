// tests/integration/integration.test.js
const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

test('Example integration test for CSS styles', async () => {
  // Test your CSS styles using Puppeteer
  await page.goto(`file://${path.resolve(__dirname, 'src/index.html')}`);
  const navBackgroundColor = await page.$eval('nav', (nav) => getComputedStyle(nav).backgroundColor);
  expect(navBackgroundColor).toBe('rgb(27, 27, 27)');
  // Add more CSS style assertions as needed
});

afterAll(async () => {
  await browser.close();
});
