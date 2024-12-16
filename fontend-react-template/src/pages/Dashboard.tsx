import React from 'react';
import { AccountSummary } from '../components/dashboard/AccountSummary';
import { TransactionHistory } from '../components/dashboard/TransactionHistory';

// Mock data - will be replaced with API calls
const mockAccount = {
  id: '1',
  userId: '1',
  accountNumber: '1234567890',
  accountType: 'SAVINGS',
  balance: 12500.75,
  status: 'ACTIVE',
  createdAt: new Date(),
  updatedAt: new Date()
} as const;

const mockTransactions = [
  {
    id: '1',
    accountId: '1',
    type: 'CREDIT',
    amount: 2500.00,
    description: 'Salary Deposit',
    category: 'Income',
    status: 'COMPLETED',
    timestamp: new Date()
  },
  {
    id: '2',
    accountId: '1',
    type: 'DEBIT',
    amount: 150.00,
    description: 'Grocery Shopping',
    category: 'Shopping',
    status: 'COMPLETED',
    timestamp: new Date()
  },
  // Add more mock transactions as needed
] as const;

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
        <div className="space-y-6">
          <AccountSummary account={mockAccount} />
          <TransactionHistory transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
};