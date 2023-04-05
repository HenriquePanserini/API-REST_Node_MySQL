const sequelize = require('../Database/Connection')

const clienteModel = sequelize.define('tslc001', {

}, { tableName: 'tslc001' })

module.exports = clienteModel;