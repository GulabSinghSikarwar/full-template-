import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { AccountSummary } from '../components/dashboard/AccountSummary';
import { TransactionList } from '../components/transactions/TransactionList';
import { TransactionForm } from '../components/transactions/TransactionForm';
import { useTransactions } from '../hooks/useTransactions';
import { api } from '../services/api';

export const Dashboard = () => {
  const [account, setAccount] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  
  const {
    transactions,
    loading,
    error,
    fetchTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
  } = useTransactions();

  useEffect(() => {
    const loadData = async () => {
      try {
        const accountData = await api.getAccount();
        setAccount(accountData);
        await fetchTransactions();
      } catch (err) {
        console.error('Failed to load initial data:', err);
      }
    };
    loadData();
  }, [fetchTransactions]);

  const handleCreateTransaction = async (data) => {
    try {
      await createTransaction(data);
      setIsFormOpen(false);
    } catch (err) {
      console.error('Failed to create transaction:', err);
    }
  };

  const handleUpdateTransaction = async (data) => {
    if (!editingTransaction) return;
    try {
      await updateTransaction(editingTransaction.id, data);
      setEditingTransaction(null);
    } catch (err) {
      console.error('Failed to update transaction:', err);
    }
  };

  const handleDeleteTransaction = async (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await deleteTransaction(id);
      } catch (err) {
        console.error('Failed to delete transaction:', err);
      }
    }
  };

  if (error) {
    return <div className="text-red-600 p-4">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Transaction
          </button>
        </div>

        {account && <AccountSummary account={account} />}

        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Transactions</h2>
              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : (
                <TransactionList
                  transactions={transactions}
                  onEdit={setEditingTransaction}
                  onDelete={handleDeleteTransaction}
                />
              )}
            </div>
          </div>
        </div>

        {(isFormOpen || editingTransaction) && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">
                {editingTransaction ? 'Edit Transaction' : 'New Transaction'}
              </h2>
              <TransactionForm
                initialData={editingTransaction}
                onSubmit={editingTransaction ? handleUpdateTransaction : handleCreateTransaction}
                onCancel={() => {
                  setIsFormOpen(false);
                  setEditingTransaction(null);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};