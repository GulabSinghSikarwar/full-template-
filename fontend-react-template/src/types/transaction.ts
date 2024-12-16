export interface Transaction {
  id: string;
  accountId: string;
  type: 'CREDIT' | 'DEBIT';
  amount: number;
  description: string;
  category: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  timestamp: Date;
}