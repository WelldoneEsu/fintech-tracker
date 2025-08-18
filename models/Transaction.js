const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true   
    },
    amount: {
    type: Number,
    required: true,
    min: [0, 'Amount must be positive!'],
    //description: 'The amount of the transaction, must be greater than 0.'
},
balanceAfter: {
    type: Number,
    required: true,
}
},
{ timestamps: true } // It automatically adds two fields: createdAt → when the document was first created & updatedAt → when the document was last modified
);

module.exports = mongoose.model('Transaction', transactionSchema);
