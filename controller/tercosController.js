const gloriosos = require('../database/gloriosos.json')
const dolorosos = require('../database/dolorosos.json')
const gozosos = require('../database/gozosos.json')
const luminosos = require('../database/luminosos.json')

const tercosController ={
    tercoMariano: (req, res, next) =>{  
        
        return res.render('tercoMariano', {
            tituloPage: "terço mariano",
            gloriosos,
            luminosos,
            gozosos,
            dolorosos                        
        }); 
    },    
}

module.exports= tercosController;