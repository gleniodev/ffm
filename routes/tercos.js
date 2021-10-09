const express = require('express');
const tercosController = require('../controller/tercosController');
const router = express.Router();

router.get('/terco-mariano', tercosController.tercoMariano);

module.exports = router;