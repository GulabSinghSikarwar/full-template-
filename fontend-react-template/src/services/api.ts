import type { Transaction } from '../types/transaction';
import type { User, Account } from '../types/user';

// Mock user data
const mockUser: User = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105'
  },
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
};

// Mock account data
const mockAccount: Account = {
  id: '1',
  userId: '1',
  accountNumber: '1234567890',
  accountType: 'SAVINGS',
  balance: 12500.75,
  status: 'ACTIVE',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
};

// Mock transactions data
let mockTransactions: Transaction[] = [
  {
    id: '1',
    accountId: '1',
    type: 'CREDIT',
    amount: 2500.00,
    description: 'Salary Deposit',
    category: 'Income',
    status: 'COMPLETED',
    timestamp: new Date('2024-03-01')
  },
  {
    id: '2',
    accountId: '1',
    type: 'DEBIT',
    amount: 150.00,
    description: 'Grocery Shopping',
    category: 'Shopping',
    status: 'COMPLETED',
    timestamp: new Date('2024-03-02')
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const api = {
  // User endpoints
  getCurrentUser: async (): Promise<User> => {
    await delay(500);
    return mockUser;
  },

  // Account endpoints
  getAccount: async (): Promise<Account> => {
    await delay(500);
    return mockAccount;
  },

  // Transaction endpoints
  getTransactions: async (): Promise<Transaction[]> => {
    await delay(500);
    return mockTransactions;
  },

  getTransaction: async (id: string): Promise<Transaction> => {
    await delay(500);
    const transaction = mockTransactions.find(t => t.id === id);
    if (!transaction) throw new Error('Transaction not found');
    return transaction;
  },

  createTransaction: async (transaction: Omit<Transaction, 'id' | 'timestamp'>): Promise<Transaction> => {
    await delay(500);
    const newTransaction: Transaction = {
      ...transaction,
      id: String(mockTransactions.length + 1),
      timestamp: new Date()
    };
    mockTransactions = [...mockTransactions, newTransaction];
    return newTransaction;
  },

  updateTransaction: async (id: string, updates: Partial<Transaction>): Promise<Transaction> => {
    await delay(500);
    mockTransactions = mockTransactions.map(t => 
      t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
    );
    const updated = mockTransactions.find(t => t.id === id);
    if (!updated) throw new Error('Transaction not found');
    return updated;
  },

  deleteTransaction: async (id: string): Promise<void> => {
    await delay(500);
    mockTransactions = mockTransactions.filter(t => t.id !== id);
  }
};