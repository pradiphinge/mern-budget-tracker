const { timeStamp } = require('console');
const mongoose = require('mongoose');
// const validator = require('validator');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
         
    },
    amount: {
        type: Number,
        trim: true,
        required: [true, 'Please enter a valid positive or negative number'],
        validate: {
            validator: function (el) {
                return !Number.isNaN(el)
            },message:"Not a valid number",
        }    
    }

}, { timestamps:true });
module.exports = mongoose.model('Transaction', TransactionSchema);