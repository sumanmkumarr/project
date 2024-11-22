import React from 'react';
import { Shield } from 'lucide-react';
import useRBACStore from '../store/rbacStore';

const PermissionList: React.FC = () => {
  const { roles } = useRBACStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Permission Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900">{role.name}</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">{role.description}</p>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700">Permissions:</h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionList;