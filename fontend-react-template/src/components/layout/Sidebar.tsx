import React from 'react';
import { Home, CreditCard, History, User as UserIcon, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Accounts', icon: CreditCard, href: '/accounts' },
  { name: 'Transactions', icon: History, href: '/transactions' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white">
      <div className="p-6">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800"
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};