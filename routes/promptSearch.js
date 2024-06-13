const express = require('express');
const router = express.Router();
const { generateTextContent } = require('../services/textService');

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

module.exports = router;
