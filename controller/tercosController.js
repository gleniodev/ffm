// const {gloriosos, dolorosos, gozosos, luminosos} = ('../database')
const misterios = require('../database/misterios.json')

const tercosController ={
    tercoMariano: (req, res, next) =>{  
        
        return res.render('tercoMariano', {
            tituloPage: "terço mariano",             
            misterios: misterios           
            // luminosos: luminosos,
            // gozosos: gozosos,
            // dolorosos:dolorosos                        
        }); 
    },    
}

module.exports= tercosController;