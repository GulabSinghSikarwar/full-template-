export const mockUser = {
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

export const mockAccount = {
  id: '1',
  userId: '1',
  accountNumber: '1234567890',
  accountType: 'SAVINGS',
  balance: 12500.75,
  status: 'ACTIVE',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
};

export const mockTransactions = [
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