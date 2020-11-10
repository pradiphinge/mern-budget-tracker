const Transactions = require('../models/Transactions');

// @desc GET all transactions
// @route GET /api/v1/transactions
// @access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transactions.find()
        return res.status(200).json({
            success: true,
            count:transactions.length,
            data:transactions
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error:'server error'
        })        
    }
}

// @desc Add a transaction
// @route POST /api/v1/transactions
// @access public
exports.addTransaction = async (req, res, next) => {
    const { text, amount } = req.body;
    try {
        const transaction = await Transactions.create(req.body)
        return res.status(201).json({
            success: true,
            data:transaction
        })
    } catch (error) {
        console.log(error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error:messages
            })
        
        } else {
            return res.status(500).json({
                success: false,
                error:'server error'
            })  
        }

    }
}

// @desc Delete a transaction
// @route DELETE /api/v1/transactions/:id
// @access public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transactions.findByIdAndDelete(req.params.id);
        if (!transaction) {
           return res.status(404).json({
                success: false,
                error: 'No Transaction Found'
            })
        }
        return res.status(200).json({
            success: true,
            data: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error:'server error'
        })  
    }    
}
