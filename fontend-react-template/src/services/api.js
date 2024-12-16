import { mockUser, mockAccount, mockTransactions } from './mockData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let transactions = [...mockTransactions];

export const api = {
  getCurrentUser: async () => {
    await delay(500);
    return mockUser;
  },

  getAccount: async () => {
    await delay(500);
    return mockAccount;
  },

  getTransactions: async () => {
    await delay(500);
    return transactions;
  },

  getTransaction: async (id) => {
    await delay(500);
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) throw new Error('Transaction not found');
    return transaction;
  },

  createTransaction: async (transaction) => {
    await delay(500);
    const newTransaction = {
      ...transaction,
      id: String(transactions.length + 1),
      timestamp: new Date()
    };
    transactions = [...transactions, newTransaction];
    return newTransaction;
  },

  updateTransaction: async (id, updates) => {
    await delay(500);
    transactions = transactions.map(t => 
      t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
    );
    const updated = transactions.find(t => t.id === id);
    if (!updated) throw new Error('Transaction not found');
    return updated;
  },

  deleteTransaction: async (id) => {
    await delay(500);
    transactions = transactions.filter(t => t.id !== id);
  }
};