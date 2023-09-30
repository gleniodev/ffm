const express = require('express');
const axios = require('axios');
const liturgiaController = {

    primeiraLeitura: async (req, res, next) => {
        try {
            // Faça a chamada à API aqui
            const response = await axios.get('https://liturgia.up.railway.app/');
            const data = response.data;
            console.log(data)

            // Renderize os dados no servidor
            res.render('primeiraLeitura', { 
                data, 
                tituloPage: "Liturgia Diária",
            }); 

            } catch (error) {
                console.error('Erro ao consumir a API:', error);
                res.status(500).send('Erro ao carregar os dados da API.');
            }

    },

    segundaLeitura: async (req, res, next) => {
        try {
            // Faça a chamada à API aqui
            const response = await axios.get('https://liturgia.up.railway.app/');
            const data = response.data;
            console.log(data)

            // Renderize os dados no servidor
            res.render('segundaLeitura', { 
                data, 
                tituloPage: "Liturgia Diária",
            }); 

            } catch (error) {
                console.error('Erro ao consumir a API:', error);
                res.status(500).send('Erro ao carregar os dados da API.');
            }

    },

    salmo: async (req, res, next) => {
        try {
            // Faça a chamada à API aqui
            const response = await axios.get('https://liturgia.up.railway.app/');
            const data = response.data;
            console.log(data)

            // Renderize os dados no servidor
            res.render('salmo', { 
                data, 
                tituloPage: "Liturgia Diária",
            }); 

            } catch (error) {
                console.error('Erro ao consumir a API:', error);
                res.status(500).send('Erro ao carregar os dados da API.');
            }

    },

    evangelho: async (req, res, next) => {
        try {
            // Faça a chamada à API aqui
            const response = await axios.get('https://liturgia.up.railway.app/');
            const data = response.data;
            console.log(data)

            // Renderize os dados no servidor
            res.render('evangelho', { 
                data, 
                tituloPage: "Liturgia Diária",
            }); 

            } catch (error) {
                console.error('Erro ao consumir a API:', error);
                res.status(500).send('Erro ao carregar os dados da API.');
            }

    }

}

module.exports = liturgiaController