const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  await page.goto('http://quotes.toscrape.com', { waitUntil: 'domcontentloaded' });

  const quotes = await page.evaluate(() => {
    const data = [];
    const quoteBlocks = document.querySelectorAll('.quote');

    quoteBlocks.forEach((quote) => {
      const text = quote.querySelector('.text')?.innerText;
      const author = quote.querySelector('.author')?.innerText;
      const tags = Array.from(quote.querySelectorAll('.tags .tag')).map(tag => tag.innerText);

      data.push({ text, author, tags });
    });

    return data;
  });

  console.log('Scraped Quotes:');
  console.log(quotes);

  await browser.close();
})();
