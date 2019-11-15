const express = require('express');
const router = express.Router();
const newsLetterController = require('./../controllers/newsletters.controller');

// NewsLetters route.
router.get("/getNewsLetters", newsLetterController.getNewsLetters);

module.exports = router ;