const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
      
        status: {
            type: String,
            required: true
        },
        data_devolucao: {
            type: Date,
            required: true
        },
        data_emprestimo: {
            type: Date,
            default: Date.now
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
        },
    },
    {
        timestamps: true
    }
)

const Emprestimo = mongoose.model('emprestimo', schema)

module.exports = Emprestimo