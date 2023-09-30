const express = require('express');
const homeController = require('../controller/homeController');

const router = express.Router();

// rota definitiva = /terco-mariano
router.get('/', homeController.home);

module.exports = router;