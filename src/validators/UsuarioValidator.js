const yup = require('yup');

const usuarioSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório!'),
    email: yup
        .string("Precisa ser um email válido"),
    senha: yup
        .string("Campo senha precisa ser uma string")
})

function usuarioValidador(req, res, next) {
    usuarioSchema
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
    usuarioValidador
}