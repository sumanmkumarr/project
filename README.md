# RBAC Dashboard

A modern, responsive Role-Based Access Control (RBAC) dashboard built with React, TypeScript, and Tailwind CSS. This application provides a user-friendly interface for managing users, roles, and permissions in a secure system.

## Features

- **User Management**
  - View and manage user accounts
  - Add, edit, and delete users
  - Assign roles to users
  - Toggle user status (active/inactive)

- **Role Management**
  - Create and modify roles
  - Define role permissions
  - Manage role descriptions
  - Delete unused roles

- **Permission Overview**
  - Visual representation of role permissions
  - Clear permission hierarchy
  - Easy-to-understand permission cards

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Lucide React (Icons)
- Vite (Build Tool)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── UserList.tsx    # User management
│   ├── RoleList.tsx    # Role management
│   └── PermissionList.tsx  # Permission overview
├── store/              # State management
│   └── rbacStore.ts    # Zustand store
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Features in Detail

### User Management
- Complete CRUD operations for user accounts
- Role assignment interface
- Status management (active/inactive)
- Avatar support
- Email and name management

### Role Management
- Create and edit roles with descriptions
- Assign multiple permissions to roles
- Visual permission tags
- Role deletion with confirmation

### Permission Overview
- Card-based permission visualization
- Role-based permission grouping
- Clear permission hierarchy display
- Responsive grid layout

## Best Practices

- TypeScript for type safety
- Component-based architecture
- Responsive design
- Modern React patterns (hooks, functional components)
- Centralized state management
- Modular and maintainable code structure

## License

MIT