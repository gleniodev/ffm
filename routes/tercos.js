const express = require('express');
const tercosController = require('../controller/tercosController');
const router = express.Router();

// rota correta = /terco-mariano
router.get('/', tercosController.tercoMariano);

module.exports = router;