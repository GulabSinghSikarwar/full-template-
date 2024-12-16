// const Transaction = require('../models/transaction');
// const Account = require('../models/account');

// // Add a new transaction (credit/debit)
// exports.addTransaction = async (req, res, next) => {
//   try {
//     const { accountNumber, type, amount } = req.body;

//     const account = await Account.findOne({ accountNumber });
//     if (!account) {
//       return res.status(404).json({ message: 'Account not found' });
//     }

//     if (type === 'debit' && account.balance < amount) {
//       return res.status(400).json({ message: 'Insufficient balance' });
//     }

//     const newTransaction = new Transaction({ accountNumber, type, amount });
//     await newTransaction.save();

//     if (type === 'credit') {
//       account.balance += amount;
//       account.credits += amount;
//     } else if (type === 'debit') {
//       account.balance -= amount;
//       account.debits += amount;
//     }

//     await account.save();
//     res.status(201).json(newTransaction);
//   } catch (error) {
//     next(error);
//   }
// };

// // Get all transactions for an account
// exports.getTransactions = async (req, res, next) => {
//   try {
//     const transactions = await Transaction.find({ accountNumber: req.params.accountNumber });
//     if (!transactions.length) {
//       return res.status(404).json({ message: 'No transactions found for this account' });
//     }
//     res.status(200).json(transactions);
//   } catch (error) {
//     next(error);
//   }
// };

const Transaction = require('../models/Transaction');

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Get a specific transaction by ID
const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    const transaction = new Transaction({
      type,
      amount,
      description,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Update an existing transaction
const updateTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { type, amount, description } = req.body;

    const transaction = await Transaction.findByIdAndUpdate(
      transactionId,
      { type, amount, description },
      { new: true, runValidators: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const transaction = await Transaction.findByIdAndDelete(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
