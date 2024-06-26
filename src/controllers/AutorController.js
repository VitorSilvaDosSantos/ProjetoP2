const Autor = require('../models/Autor')

async function create(req, res) {
    const autor = new Autor(req.body)
    const autorCriado = await autor.save()
    res.status(201).json(autorCriado)
}

//Usei sempre o AWAIT pra lidar com operações assíncronas que retornam Promises,
//garantindo que o código aguarde a conclusão dessas operações antes de prosseguir.

async function getAll(req, res) {
    res.json(await Autor.find())
 }

 //Usando a função getById serve para recuperar e retornar um autor específico do
 //banco de dados, baseado no ID fornecido na solicitação (request).

async function getById(req, res) {
    const autor = await Autor.findById(req.params.id)
    if (autor) {
        res.json(autor)
    } else {
        res.status(404).json({ mensagem: "Autor não encontrado!" })
    }
}

async function update(req, res) {
    const autorAtualizado = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (autorAtualizado) {
        res.json(autorAtualizado)
    } else {
        res.status(404).json({ mensagem: "Autor não encontrado!" })
    }

}

async function remove(req, res) {
    const autorExcluido = await Autor.findByIdAndDelete(req.params.id)
    if (autorExcluido) {
        res.json({
            mensagem: "Autor excluido com sucesso!",
            autorExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Autor não encontrado!" })
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