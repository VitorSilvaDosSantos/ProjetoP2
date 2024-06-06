const yup = require('yup');

const emprestimoSchema = yup.object().shape({
    status: yup
        .string('Campo status precisa ser um texto')
        .required('Campo status obrigatório!'),
    data_devolucao: yup
        .date("Precisa ser um ano"),
    data_emprestimo: yup
        .date("Precisa ser um ano"),
    membro: yup
        .string('O membro precisa ser um texto')
        .required('Campo membro obrigatório!'),
    livro: yup
        .string('Este campo precisa ser o id do emprestimo')
        .required('Precisa-se informar quem é o emprestimo!'),
})

function emprestimoValidador(req, res, next) {
    emprestimoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(e => {
            const errors = e.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    emprestimoValidador
}