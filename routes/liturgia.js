const express = require('express');
const liturgiaController = require('../controller/liturgiaController');

const router = express.Router();

// liturgia diária
router.get('/primeiraLeitura', liturgiaController.primeiraLeitura);

router.get('/salmo', liturgiaController.salmo);

router.get('/segundaLeitura', liturgiaController.segundaLeitura);

router.get('/evangelho', liturgiaController.evangelho);

module.exports = router;