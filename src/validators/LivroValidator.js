const yup = require('yup');

const livroSchema = yup.object().shape({
    titulo: yup
        .string('Campo titulo precisa ser um texto')
        .required('Campo titulo obrigatório!'),
    ano_publicacao: yup
        .number("Precisa ser um ano"),
    editora: yup
        .string('Campo editora precisa ser um texto')
        .required('Campo editora obrigatório!'),
    genero: yup
        .string('O gênero do livro precisa ser um tempo')
        .required('Campo gênero obrigatório!'),
    autor: yup
        .string('Este campo precisa ser o id do autor')
        .required('Precisa-se informar quem é o autor!'),
})

function livroValidador(req, res, next) {
    livroSchema
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
    livroValidador
}