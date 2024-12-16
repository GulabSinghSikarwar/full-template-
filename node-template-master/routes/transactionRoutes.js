// const express = require('express');
// const transactionController = require('../controllers/transactionController');

// const router = express.Router();

// // Routes for Transaction operations
// router.post('/', transactionController.addTransaction); // Add a credit/debit transaction
// router.get('/:accountNumber', transactionController.getTransactions); // Get all transactions for an account

// module.exports = router;


const express = require('express');
const {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

const router = express.Router();

// Get all transactions
router.get('/', getAllTransactions);

// Get a specific transaction by ID
router.get('/:transactionId', getTransactionById);

// Create a new transaction
router.post('/', createTransaction);

// Update an existing transaction
router.put('/:transactionId', updateTransaction);

// Delete a transaction
router.delete('/:transactionId', deleteTransaction);

module.exports = router;
