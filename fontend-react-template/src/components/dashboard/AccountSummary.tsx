import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import type { Account } from '../../types/user';

interface AccountSummaryProps {
  account: Account;
}

export const AccountSummary = ({ account }: AccountSummaryProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Account Summary</h2>
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
          {account.status}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Current Balance</p>
              <p className="text-2xl font-bold text-gray-900">
                ${account.balance.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Income</p>
              <p className="text-2xl font-bold text-gray-900">$2,450.00</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="flex items-center">
            <TrendingDown className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Expenses</p>
              <p className="text-2xl font-bold text-gray-900">$1,280.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};