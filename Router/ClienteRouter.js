const router = require('express').Router();

const clienteController = require('../Controller/ClienteController');

router
    .route('/cliente')
    .get((req, res) => clienteController.get(req, res));


module.exports = router;