const express = require('express');
const router = express.Router();
const userService = require('../services/sampleService');
const geminiApi = require('../services/geminiApi');
const imageApi = require('../services/geminiImageApi');


router.get('/', (req, res) => {
    // Render the profile edit form with user data
    res.send("HELLO THIS is sample page");
});

router.get('/users', (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
});

// Route to get a user by ID
router.get('/users/:id', (req, res) => {
    const user = userService.getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.get('/api' , (req, res) => {
    const apiResponse = geminiApi.generate_from_text_input(projectId = 'hackmee-team-17-0622');
    if(apiResponse){
        res.json(apiResponse);
    } else {
        res.status(404).send("No response");
    }
})

router.get('/image' , (req , res) => {
    const imageApiResponse = imageApi.createNonStreamingMultipartContent()
})

module.exports = router;