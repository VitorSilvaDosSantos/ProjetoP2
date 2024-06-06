const yup = require('yup');

const membroSchema = yup.object().shape({
    nome: yup
        .string('Campo nome precisa ser um texto')
        .required('Campo nome obrigatório!'),
    email: yup
        .string("Precisa ser um email valido")
        .required('Campo email obrigatório!'),
    cpf: yup
        .string("Campo cpf precisa ser válido")
        .required('Campo cpf obrigatório!'),
    telefone: yup
        .string('Campo telefone precisa ser um texto')
        .required('Campo telefone obrigatório!'),
  
        
    
})

function membroValidador(req, res, next) {
    membroSchema
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
    membroValidador
}