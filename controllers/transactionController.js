const Transaction = require('../models/Transaction');
const User = require('../models/User');

// POST /api/transactions
exports.makeTransaction = async (req, res, next) => {
    try {
        const { type, amount } = req.body;
        const user = req.user;
    
        // Validate input
        if (!type || !['credit', 'debit'].includes (type)) {
            return res.status(400).json({ message: 'Invalid transaction type' });
        }
        
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json ({ message: 'Amount must be a positive number'});
        }
        // Fetch user data

      const dbUser = await User.findById(user._id);
      if (!dbUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        //Determine new balance
        let newBalance;
        if (type === 'debit') {
            if (amount > dbUser.balance) {
                return res.status(400).json({ message: 'Insufficient balance'});
            }
              newBalance = dbUser.balance - amount;
         } else {
             newBalance = dbUser.balance + amount;
                }

        // Update user balance
        dbUser.balance = newBalance;
        await dbUser.save();

      // Log transaction
      const transaction = await Transaction.create ({
        user: dbUser._id,
        type,
        amount,
        balanceAfter: newBalance,
      });
      res.status(201).json({ message: 'Transaction succesful', transaction,
      });
    } catch (err) {
        next (err); //Pass to custom error handlers
    }
};

// GET /api/transactions/:id
exports.getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user._id, // only fetch user's own transaction
    });

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (err) {
    next(err);
  }
};

// PUT /api/transactions/:id (Admin only)
exports.updateTransaction = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update transactions' });
    }

    const { type, amount } = req.body;

    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    // Update only provided fields
    if (type) transaction.type = type;
    if (amount) transaction.amount = amount;

    await transaction.save();

    res.status(200).json({ message: 'Transaction updated by admin', transaction });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/transactions/:id (Admin only)
exports.deleteTransaction = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete transactions' });
    }

    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    await transaction.deleteOne();

    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    next(err);
  }
};
