const express = require('express')
const router = express.Router()

// controllers
const LivroController = require('../controllers/LivroController')
const AutorController = require('../controllers/AutorController')
const MembroController = require('../controllers/MembroController')
const EmprestimoController = require('../controllers/EmprestimoController')
const ClassificacaoController = require('../controllers/ClassificacaoController')

// validators
const { validarId } = require('../validators/idValidador')
const { livroValidador } = require('../validators/LivroValidator')
const { autorValidador } = require('../validators/AutorValidator')
const { membroValidador } = require('../validators/MembroValidator')
const { emprestimoValidador } = require('../validators/EmprestimoValidator')
const { classificacaoValidador } = require('../validators/ClassificacaoValidator')

// Livros
router.post('/livros', livroValidador, LivroController.create)
router.get('/livros', LivroController.getAll)
router.get('/livros/:id', validarId, LivroController.getById)
router.put('/livros/:id', validarId, livroValidador, LivroController.update)
router.delete('/livros/:id', validarId, LivroController.remove)

// Autores
router.post('/autores', autorValidador, AutorController.create)
router.get('/autores', AutorController.getAll)
router.get('/autores/:id', validarId, AutorController.getById)
router.put('/autores/:id', validarId, autorValidador, AutorController.update)
router.delete('/autores/:id', validarId, AutorController.remove)

// Membros
router.post('/membros', membroValidador, MembroController.create)
router.get('/membros', MembroController.getAll)
router.get('/membros/:id', validarId, MembroController.getById)
router.put('/membros/:id', validarId, membroValidador, MembroController.update)
router.delete('/membros/:id', validarId, MembroController.remove)

// Emprestimos
router.post('/emprestimos', emprestimoValidador, EmprestimoController.create)
router.get('/emprestimos', EmprestimoController.getAll)
router.get('/emprestimos/:id', validarId, EmprestimoController.getById)
router.put('/emprestimos/:id', validarId, emprestimoValidador, EmprestimoController.update)
router.delete('/emprestimos/:id', validarId, EmprestimoController.remove)

// Classificacoes
router.post('/classificacoes', classificacaoValidador, ClassificacaoController.create)
router.get('/classificacoes', ClassificacaoController.getAll)
router.get('/classificacoes/:id', validarId, ClassificacaoController.getById)
router.put('/classificacoes/:id', validarId, classificacaoValidador, ClassificacaoController.update)
router.delete('/classificacoes/:id', validarId, ClassificacaoController.remove)


module.exports = router