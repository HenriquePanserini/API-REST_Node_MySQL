const router = require('express').Router();

const { getAllClients } = require('../Controller/ClienteController');

router
    .route('/cliente')
    .get((req, res) => getAllClients(req, res));


module.exports = router;