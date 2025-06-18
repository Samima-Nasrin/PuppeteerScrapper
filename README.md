# Puppeteer Quotes Scraper

This is a simple Node.js project that uses **Puppeteer** to scrape quotes, authors, and tags from [QuotesToScrape](http://quotes.toscrape.com) — a website built for web scraping practice.

The script launches a headless browser, navigates to the site, and extracts quote blocks from the DOM, returning them as a structured JSON array.

---

## Tech Stack

- Node.js
- Puppeteer

---

## How to Run

1. Clone this repo:

```bash
git clone https://github.com/Samima-Nasrin/PuppeteerScrapper.git
cd PuppeteerScrapper
```

2. Install dependencies:
   
```bash
npm install
```

3. Run the scraper:
   
```bash
node scraper.js
```

## Sample Output

```json
[
  {
    "text": "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    "author": "Albert Einstein",
    "tags": ["change", "deep-thoughts", "thinking", "world"]
  },
  {
    "text": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "author": "J.K. Rowling",
    "tags": ["abilities", "choices"]
  },
  {
    "text": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "author": "Albert Einstein",
    "tags": ["inspirational", "life", "live", "miracle", "miracles"]
  },
  {
    "text": "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    "author": "Jane Austen",
    "tags": ["aliteracy", "books", "classic", "humor"]
  }
]



