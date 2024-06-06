const Membro = require('../models/Membro');
const { cpf } = require('cpf-cnpj-validator');

async function create(req, res) {
    if (cpf.isValid(req.body.cpf)) {
        const membro = new Membro(req.body)
        const membroCriado = await membro.save()
        return res.status(201).json(membroCriado)
    }
    res.status(400).json({
        mensagem: "CPF é inválido!"
    })
}

async function getAll(req, res) {
    res.json(await Membro.find())
}
async function getById(req, res) {
    const membro = await Membro.findById(req.params.id)
    if (membro) {
        res.json(membro)
    } else {
        res.status(404).json({ mensagem: "Membro não encontrado!" })
    }
}

async function update(req, res) {
    const membroAtualizado = await Membro.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (membroAtualizado) {
        res.json(membroAtualizado)
    } else {
        res.status(404).json({ mensagem: "Membro não encontrado!" })
    }

}

async function remove(req, res) {
    const membroExcluido = await Membro.findByIdAndDelete(req.params.id)
    if (membroExcluido) {
        res.json({
            mensagem: "Membro excluido com sucesso!",
            membroExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Membro não encontrado!" })
    }
}


//No meu código o module.exports torna as funções create,
 //getAll, getById, update e remove disponíveis para serem usadas em outras partes da minha aplicação, 
 //como em rotas de uma API.
 
module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}