const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
      
        nome: {
            type: String,
            required: true
        },
        data_nascimento: {
            type: Date,
            required: true
        },
        nacionalidade: {
            type: String,
            required: true
        }, 
        biografia: {
            type: String,
            required: true
        },   
    },
    {
        timestamps: true
    }
)

const Autores = mongoose.model('autores', schema)

module.exports = Autores