import puppeteer from 'puppeteer';

test('render app', async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto(`http://localhost:3000`);
  
  const title = await page.$('[data-testid="app-title"]');
  expect(title).toBeDefined();

  await browser.close();
});