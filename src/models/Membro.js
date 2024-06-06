const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
      
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },   
        endereco: {
            cep: String,
            uf: String,
            logradouro: String,
            localidade: String,
            bairro: String,
            numero: String,
            complemento: String
        }, 
    },
    {
        timestamps: true
    }
)

const Membros = mongoose.model('membros', schema)

module.exports = Membros