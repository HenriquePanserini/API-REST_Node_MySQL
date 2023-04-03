const router = require('express').Router();

//Cliente Route
const clienteRouter = require('../Router/ClienteRouter');

router.use('/', clienteRouter);