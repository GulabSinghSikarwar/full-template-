export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Account {
  id: string;
  userId: string;
  accountNumber: string;
  accountType: 'SAVINGS' | 'CHECKING';
  balance: number;
  status: 'ACTIVE' | 'INACTIVE' | 'FROZEN';
  createdAt: Date;
  updatedAt: Date;
}