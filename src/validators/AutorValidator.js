const yup = require('yup');

const autorSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório!'),
    data_nascimento: yup
        .date("Precisa ser um ano")
        .required('Campo data nascimento obrigatório!'),
    nacionalidade: yup
        .string('Campo nacionalidade precisa ser um texto')
        .required('Campo nacionalidade obrigatório!'),
    biografia: yup
        .string('A biografia precisa ser uma string')
        .required('Campo biografia obrigatório!'),
})

function autorValidador(req, res, next) {
    autorSchema
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
    autorValidador
}