const express = require('express');
const router = express.Router();

const namesController = require('../controllers/names');

router.get('/', namesController.sendName);
router.get('/test', namesController.sendAnotherName);

module.exports = router;
