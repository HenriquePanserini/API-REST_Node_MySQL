const clienteModel = require('../Model/ClienteModel');

const clienteController = {

    get: async(req, res) => {
        try {

            const response = clienteModel.findAll({
                attributes: [
                    'CLICOD',
                    'CLINOM'
                ]
            })

            res.status(201).json({ msg: 'Dados carregados com sucesso', response })

        } catch (error) {
            res.status(401).json({ error: error })
            console.error(error);
        }
    }
}

module.exports = clienteController;