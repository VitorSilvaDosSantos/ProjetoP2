const Classificacao = require('../models/Classificacao')

async function create(req, res) {
    const classificacao = new Classificacao(req.body)
    const classificacaoCriado = await classificacao.save()
    res.status(201).json(classificacaoCriado)
}

async function getAll(req, res) {
    res.json(await Classificacao.find())
 }
async function getById(req, res) {
    const classificacao = await Classificacao.findById(req.params.id)
    if (classificacao) {
        res.json(classificacao)
    } else {
        res.status(404).json({ mensagem: "Classificacao não encontrada!" })
    }
}

async function update(req, res) {
    const classificacaoAtualizado = await Classificacao.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (classificacaoAtualizado) {
        res.json(classificacaorAtualizado)
    } else {
        res.status(404).json({ mensagem: "Classificacao não encontrada!" })
    }

}

async function remove(req, res) {
    const classificacaoExcluido = await Classificacao.findByIdAndDelete(req.params.id)
    if (classificacaoExcluido) {
        res.json({
            mensagem: "Classificacao excluida com sucesso!",
            classificacaoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Classificacao não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}