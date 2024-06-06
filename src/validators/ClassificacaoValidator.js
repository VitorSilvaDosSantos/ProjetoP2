const yup = require('yup');

const classificacaoSchema = yup.object().shape({
    estrelas: yup
        .number('Campo estrelas precisa ser um numero')
        .required('Campo estrelas obrigatório!'),
    data_classificacao: yup
        .date("Precisa ser um ano"),
    descricao: yup
        .string('Campo descricao precisa ser um texto')
        .required('Campo descricao obrigatório!'),
    membro: yup
        .string('O membro precisa ser um nome')
        .required('Campo membro obrigatório!'),
    livro: yup
        .string('Este campo precisa ser o nome do livro')
        .required('Precisa-se informar qual é o livro'),
})

function classificacaoValidador(req, res, next) {
    classificacaoSchema
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
    classificacaoValidador
}