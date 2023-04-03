const connection = require('../Database/Connection')

const clienteModel = connection.define({

}, { tableName: 'tslc001' })

module.exports = clienteModel;