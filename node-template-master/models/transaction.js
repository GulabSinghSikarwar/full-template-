const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  accountNumber: { type: String, required: false },
  description: { type: String, required: false },
  type: { type: String, enum: ['credit', 'debit'], required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);