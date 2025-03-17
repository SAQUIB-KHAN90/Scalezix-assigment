const express = require("express");
const {
  queryAndRespond,
  crawlUrls,
  scrapeUrls,
  storeData,
} = require("./scrapper");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json());

// 1️⃣ Route to Query the Chatbot
app.post("/query", async (req, res) => {
  try {
    const { query } = req.body;
    const response = await queryAndRespond(query);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Error processing query" });
  }
});

// 2️⃣ Route to Crawl URLs
app.post("/crawl", async (req, res) => {
  try {
    const { homepage, maxPages } = req.body;
    const urls = await crawlUrls(homepage, maxPages);
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: "Error crawling URLs" });
  }
});

// 3️⃣ Route to Scrape Data
app.post("/scrape", async (req, res) => {
  try {
    const { urls } = req.body;
    const scrapedData = await scrapeUrls(urls);
    res.json(scrapedData);
  } catch (error) {
    res.status(500).json({ error: "Error scraping data" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
