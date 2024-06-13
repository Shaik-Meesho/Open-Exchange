const express = require('express');
const router = express.Router();
const storeImageIntoGcs = require('../services/storeImageIntoGcsService');



router.post('/upload-from-url', async (req, res) => {
    try {
      const imageUrl = req.body.imageUrl;
      const imageName = req.body.imageName; // Extracting image name from request body
  
      if (!imageUrl || !imageName) {
        return res.status(400).send('Image URL and Image Name are required.');
      }
  
      const bucketName = 'open-exchange'; // Your GCS bucket name
      const destinationFileName = imageName; // Use the provided image name
  
      // Upload image to Google Cloud Storage from URL
      await storeImageIntoGcs.uploadFileFromUrl(bucketName, imageUrl, destinationFileName);
  
      res.status(200).send('Image uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).send('Error uploading image.');
    }
  });

module.exports = router;