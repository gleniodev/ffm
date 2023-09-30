const express = require('express');
const tercosController = require('../controller/tercosController');

const router = express.Router();

// rota definitiva = /terco-mariano
router.get('/misterios', tercosController.tercoMariano);

// // orações iniciais
router.get('/ritosIniciais', tercosController.ritosIniciais);

// // orações Finais
router.get('/ritosFinais', tercosController.ritosFinais);


module.exports = router;