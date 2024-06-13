const express = require('express');
const router = express.Router();
const { generateTextContent } = require('../services/textService');
const { exchangeReason, getProducts } = require('../controllers/recommendations');

router.post('/generate-text', async (req, res) => {
  try {
    const { prompt } = req.body;
    const contentResponse = await generateTextContent(prompt);
    res.json(contentResponse);
  } catch (error) {
    console.error('Error generating text content:', error);
    res.status(500).send('Internal Server Error');
  }
});
router.post("/returnReason",exchangeReason)
router.get("/getProducts",getProducts)
router.get("/getProductDetails/:id",getProducts)

module.exports = router;
