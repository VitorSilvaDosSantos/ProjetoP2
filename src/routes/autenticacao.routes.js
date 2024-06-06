//Na minha autenticacao o código configura rotas para registro e login de usuários, usando middlewares 
//para validação de dados e funções do controlador para manipulação de requisições.

const express = require('express')
const router = express.Router()

const AutenticacaoController = require('../controllers/AutenticacaoController')

const { usuarioValidador, loginValidador } = require('../validators/AutenticacaoValidador')


router.post('/auth/registro', usuarioValidador, AutenticacaoController.registrar)

router.post('/auth/login', loginValidador, AutenticacaoController.login)


module.exports = router