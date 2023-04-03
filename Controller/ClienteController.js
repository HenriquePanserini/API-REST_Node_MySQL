const clienteModel = require('../Model/ClienteModel');

const getAllClients = async function(req, res) {

    try {
        const response = await clienteModel.findAll({
            attribute: [
                'CLICOD',
                'CLINOM'
            ]
        });

        res.status(201).json({ response, msg: 'Dados encontrados' })
    } catch (error) {
        res.status(401).json({ error: error, msg: 'Dados cliente não encontrado' });
        console.error(error);
    }

};

module.exports = [
    getAllClients
]