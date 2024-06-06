const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        ano_publicacao: {
            type: Number,
            required: true
        },
        editora: {
            type: String,
            required: true
        },
        genero: {
            type: String,
            required: true
        }, 
        autor: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'autor',
            required: true
        }
       
    },
    {
        timestamps: true
    }
)

const Livro = mongoose.model('livro', schema)

module.exports = Livro