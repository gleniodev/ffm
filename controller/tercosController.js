const gloriosos = require('../database/gloriosos');

const tercosController ={
    tercoMariano: (req, res, next) =>{
        return res.render('tercoMariano', {tituloPage: "terço mariano", misterios: gloriosos});
    }
}

module.exports= tercosController;