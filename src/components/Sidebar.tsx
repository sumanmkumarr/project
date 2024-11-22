import React from 'react';
import { Users, Shield, Key } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'roles', icon: Shield, label: 'Roles' },
    { id: 'permissions', icon: Key, label: 'Permissions' },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen p-4">
      <div className="flex items-center space-x-2 mb-8 px-4">
        <Shield className="w-8 h-8 text-indigo-500" />
        <h1 className="text-xl font-bold text-white">RBAC Admin</h1>
      </div>
      <nav>
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg mb-2 ${
              activeTab === id
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;