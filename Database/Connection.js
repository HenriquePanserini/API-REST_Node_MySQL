const Sequelize = require('sequelize');

function connect() {

    try {

        const Conncetion = new Sequelize('barracao0808', 'root', 't1eteoli', {
            host: 'localhost',
            port: '3308',
            dialect: 'mysql'
        });

        console.log('Banco de dados conectado na porta 3308');

    } catch (error) {
        console.error(error);
    }

}

module.exports = connect;