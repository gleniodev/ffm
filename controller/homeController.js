const axios = require('axios');
const homeController = {
    
    home: async(req, res, next) => {try {
        // Faça a chamada à API aqui
        const response = await axios.get('https://liturgia.up.railway.app/');
        const data = response.data;
        console.log(data)

        // Renderize os dados no servidor
        res.render('index', { 
            data, 
            tituloPage: "FFM",
        }); 

        } catch (error) {
            console.error('Erro ao consumir a API:', error);
            res.status(500).send('Erro ao carregar os dados da API.');
        }
    }

}

module.exports = homeController;