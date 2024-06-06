const Classificacao = require('../models/Classificacao')

async function create(req, res) {
    const classificacao = new Classificacao(req.body)
    const classificacaoCriado = await classificacao.save()
    res.status(201).json(classificacaoCriado)
}

//O meu getAll busca todos os registros de autores e envia esses dados como resposta para o cliente.


async function getAll(req, res) {
    res.json(await Classificacao.find())
 }

 //Usando a função getById serve para recuperar e retornar um autor específico do
 //banco de dados, baseado no ID fornecido na solicitação (request).

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
        res.json(classificacaoAtualizado)
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