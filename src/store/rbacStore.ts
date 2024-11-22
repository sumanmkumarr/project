import { create } from 'zustand';
import type { RBACStore, User, Role } from '../types';

const useRBACStore = create<RBACStore>((set) => ({
  users: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      roles: ['admin'],
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
  ],
  roles: [
    {
      id: '1',
      name: 'Admin',
      permissions: ['read', 'write', 'delete', 'manage'],
      description: 'Full system access',
    },
  ],
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: crypto.randomUUID() }],
    })),
  updateUser: (id, user) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    })),
  addRole: (role) =>
    set((state) => ({
      roles: [...state.roles, { ...role, id: crypto.randomUUID() }],
    })),
  updateRole: (id, role) =>
    set((state) => ({
      roles: state.roles.map((r) => (r.id === id ? { ...r, ...role } : r)),
    })),
  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((r) => r.id !== id),
    })),
}));

export default useRBACStore;