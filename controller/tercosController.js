const gloriosos = require('../database/gloriosos.json')
const dolorosos = require('../database/dolorosos.json')
const gozosos = require('../database/gozosos.json')
const luminosos = require('../database/luminosos.json')
const ritosIniciais = require('../database/ritosIniciais.json')
const ritosFinais = require('../database/ritosFinais.json')

const tercosController = {
    
    tercoMariano: (req, res, next) => {

        return res.render('index', {
            tituloPage: "terço mariano",
            gloriosos,
            luminosos,
            gozosos,
            dolorosos,            
        });
    },
    ritosIniciais: (req, res, next) => {

        return res.render('ritosIniciais', {
            tituloPage: "Ritos Iniciais",
            ritosIniciais
        });
    },
    ritosFinais: (req, res, next) => {

        return res.render('ritosFinais', {
            tituloPage: "Ritos Finais",
            ritosFinais
        });
    }
}

module.exports = tercosController;