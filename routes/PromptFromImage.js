const express = require('express');
const router = express.Router();
const imageApi = require('../services/geminiImageApi');

router.get('/generate-prompt' , (req , res) => {
    const imageApiResponse = imageApi.createNonStreamingMultipartContent()
    if(imageApiResponse){
        res.json(imageApiResponse)
    } else {
        res.status(404).send("No response");
    }
})

module.exports = router;