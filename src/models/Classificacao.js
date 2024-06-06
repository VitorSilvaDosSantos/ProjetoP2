const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
      
        estrelas: {
            type: Number,
            required: true
        },
        data_classificacao: {
            type: Date,
            required: true
        },
        descricao: {
            type: String,
            required: true
        }, 
        membro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'membro',
            required: true
        },
        livro: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'livro',
            required: true
        }
       
    },
    {
        timestamps: true
    }
)

const Classificacao = mongoose.model('classificacao', schema)

module.exports = Classificacao