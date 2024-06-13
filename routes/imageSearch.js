const express = require('express');
const router = express.Router();
const { generateContent } = require('../services/imageService');

router.post('/generate-image', async (req, res) => {
  try {
    const { prompt } = req.body;
    const imageResponse = await generateContent(prompt);
    res.json(imageResponse);
  } catch (error) {
    console.error('Error generating image content:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
