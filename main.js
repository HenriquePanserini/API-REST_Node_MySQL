const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const { config } = require('dotenv');

const app = express();
config();

//Modulos de filtragem
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }))

//Banco de dados -  mysql 4
const connect = require('./Database/Connection');
connect();

//Conexão de servidor
app.listen(process.env.PORT || 3000, () => {
    try {
        console.log(`Conectado ao servidor na porta ${process.env.PORT}`);
    } catch (error) {
        console.error(error);
    }
})