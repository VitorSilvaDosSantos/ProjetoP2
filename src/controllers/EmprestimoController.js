const Emprestimo = require('../models/Emprestimo');
const Membro = require('../models/Membro');
const Livro = require('../models/Livro');
const pdf = require('html-pdf'); //Pacote do NPM para upload de PDF

async function create(req, res) {
    try {
        // Criação e salvamento do empréstimo
        const emprestimo = new Emprestimo(req.body);
        const emprestimoCriado = await emprestimo.save();

        // Buscando informações de membro e livro
        const membro = await Membro.findById(req.body.membro);
        const livro = await Livro.findById(req.body.livro);

        // Enviando a resposta HTTP antes de gerar o PDF
        res.status(201).json(emprestimoCriado);

        // Geração do PDF
        const html = `
            <h1>EMPRESTIMO FEITO</h1>
            <section>
                <h2>Detalhes do Empréstimo!</h2>
                <p>
                    <label> Nome de quem pegou emprestado: ${membro.nome} </label>
                </p>
                <p>
                    <label> CPF de quem pegou emprestado: ${membro.cpf} </label>
                </p>
                <p>
                    <label> Data que foi locado: ${emprestimoCriado.data_emprestimo}</label>
                </p>
                <p>
                    <label> Data devolução: ${emprestimoCriado.data_devolucao}</label>
                </p>
                <p>
                    <label> Livro que foi locado: ${livro.titulo} </label>
                </p>
            </section>
        `;

        pdf.create(html).toFile(`./${membro.nome}.pdf`, function (err, result) {
            if (err) {
                console.error('Erro ao gerar PDF:', err);
                return;
            }
            console.log('PDF gerado com sucesso:', result.filename);
        });

    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar empréstimo' });
        console.error('Erro ao criar empréstimo:', error);
    }
}

async function getAll(req, res) {
    res.json(await Emprestimo.find())
}
async function getById(req, res) {
    const emprestimo = await Emprestimo.findById(req.params.id)
    if (emprestimo) {
        res.json(emprestimo)
    } else {
        res.status(404).json({ mensagem: "Emprestimo não encontrado!" })
    }
}

async function update(req, res) {
    const emprestimoAtualizado = await Emprestimo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (emprestimoAtualizado) {
        res.json(emprestimoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Emprestimo não encontrado!" })
    }

}

async function remove(req, res) {
    const emprestimoExcluido = await Emprestimo.findByIdAndDelete(req.params.id)
    if (emprestimoExcluido) {
        res.json({
            mensagem: "Emprestimo excluido com sucesso!",
            emprestimoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Emprestimo não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}