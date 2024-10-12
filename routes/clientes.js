const express = require('express')
const router = express.Router()

const clienteController = require("../controllers/clienteController")

router.get('/', clienteController.mostrar)

router.post('/crear', clienteController.crear)


module.exports = router