# Micro Frontend Monorepo

A demonstration of micro-frontends using a monorepo structure with a host application that displays multiple micro-frontends within a shared layout. This project contains:

- **shared-ui**: A shared component library with authentication system
- **app1**: A counter application (micro-frontend #1) - all users
- **app2**: A todo list application (micro-frontend #2) - admin only
- **app3**: A content hub with API integration (micro-frontend #3) - all users
- **host**: The main shell application with React Router v6 navigation (runs on port 3000)

## Architecture

```
micro-frontend/
├── packages/
│   ├── shared-ui/          # Shared component library + authentication
│   │   ├── src/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── AuthContext.tsx    # Authentication system
│   │   │   ├── LoginForm.tsx      # Login component
│   │   │   ├── UserProfile.tsx    # User profile component
│   │   │   ├── ProtectedWrapper.tsx # Route protection
│   │   │   └── index.ts
│   │   └── package.json
│   ├── host/               # Main shell application (port 3000)
│   │   ├── src/
│   │   │   ├── App.tsx     # Router setup + authentication
│   │   │   ├── Navigation.tsx # Navigation component
│   │   │   ├── pages/      # Route pages
│   │   │   │   ├── DashboardPage.tsx
│   │   │   │   ├── CounterPage.tsx
│   │   │   │   ├── TodoPage.tsx
│   │   │   │   └── ContentHubPage.tsx
│   │   │   └── main.tsx
│   │   └── package.json
│   ├── app1/               # Counter micro-frontend
│   │   ├── src/
│   │   │   ├── App.tsx     # Protected counter component
│   │   │   ├── index.ts    # Export for host
│   │   │   └── main.tsx
│   │   └── package.json
│   ├── app2/               # Todo micro-frontend  
│   │   ├── src/
│   │   │   ├── App.tsx     # Protected todo component (admin only)
│   │   │   ├── index.ts    # Export for host
│   │   │   └── main.tsx
│   │   └── package.json
│   └── app3/               # Content Hub micro-frontend
│       ├── src/
│       │   ├── App.tsx     # Main app with nested routing
│       │   ├── api.ts      # JSONPlaceholder API service
│       │   ├── types.ts    # TypeScript type definitions
│       │   ├── components/ # Route components
│       │   │   ├── PostsPage.tsx
│       │   │   ├── UsersPage.tsx
│       │   │   ├── AboutPage.tsx
│       │   │   └── InternalNavigation.tsx
│       │   ├── index.ts    # Export for host
│       │   └── main.tsx
│       └── package.json
└── package.json            # Root workspace configuration
```

## Key Features

### 🏗️ **Host Shell Application**
- **React Router v6**: Full client-side routing with protected routes
- **Global Navigation**: Header navigation with role-based visibility  
- **Authentication Guard**: All routes protected by authentication
- **Shared Layout**: Common header, navigation, and styling
- **Component Composition**: Micro-frontends rendered on dedicated pages
- **Unified Experience**: Users see one cohesive application with multiple pages

### 🔐 **Authentication System**
- **Role-Based Access Control**: Admin and user roles with different permissions
- **Persistent Sessions**: Authentication state saved in localStorage
- **Protected Routes**: All pages require authentication
- **Login/Logout Flow**: Complete authentication lifecycle
- **Shared Auth State**: Authentication context available across all micro-frontends

### 📰 **Content Hub (App3) Features**
- **Nested Routing**: Internal React Router v6 implementation with 3 sub-routes
- **API Integration**: Live data consumption from JSONPlaceholder REST API
- **Posts Management**: Dynamic blog post display with responsive card layouts
- **User Profiles**: Rich user directory with contact and company information
- **Documentation**: Comprehensive about page explaining the architecture
- **Internal Navigation**: Custom navigation system within the micro-frontend
- **Error Handling**: Graceful loading states and error recovery
- **TypeScript**: Fully typed API responses and component interfaces

### 🧭 **Navigation & Routing**
- **Dedicated URLs**: Each micro-frontend accessible via unique routes
  - `/` - Dashboard overview page
  - `/counter` - Counter app page (all users)
  - `/todo` - Todo app page (admin only)
  - `/content` - Content Hub with nested routes (all users)
    - `/content/` - Blog posts page
    - `/content/users` - Users directory page
    - `/content/about` - Architecture documentation page
- **Browser Navigation**: Full back/forward button support
- **Bookmarkable URLs**: Direct access to any micro-frontend
- **Active Route Highlighting**: Current page visually highlighted in navigation

### 🧩 **Micro-Frontend Integration**  
- **Independent Development**: Each micro-frontend can still be developed separately
- **Protected Components**: Apps wrapped with authentication and role-based access
- **Embedded Components**: Apps export their main components for embedding
- **Shared Dependencies**: All apps use the same shared-ui components and auth context
- **Isolated State**: Each micro-frontend maintains its own state independently
- **Route-Based Rendering**: Each app renders on its dedicated route page

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

1. Install all dependencies:
   ```bash
   npm install
   ```

2. Build the shared component library:
   ```bash
   npm run build:shared
   ```

### Development

#### Run the main host application (recommended):
```bash
npm run dev
```

This starts the host application on **http://localhost:3000** which displays all micro-frontends with:

- **Authentication required**: Login with demo credentials
- **Navigation system**: Route between different micro-frontend pages
- **Role-based access**: Different features based on user role
- **User profile**: Displays current user info with logout functionality in header

#### Demo Credentials
- **Admin**: `admin@example.com` / `admin123` (access to all features)
- **User**: `user@example.com` / `user123` (limited access)

#### Available Routes
- **http://localhost:3000/** - Dashboard overview
- **http://localhost:3000/counter** - Counter app (all users)  
- **http://localhost:3000/todo** - Todo app (admin only)
- **http://localhost:3000/content** - Content Hub main page
- **http://localhost:3000/content/users** - Users directory
- **http://localhost:3000/content/about** - About page

#### Run individual micro-frontends (for development):

**App1 (Counter) standalone:**
```bash
npm run dev:app1
```

**App2 (Todo) standalone:**  
```bash
npm run dev:app2
```

**App3 (Content Hub) standalone:**
```bash
npm run dev:app3
```

**All applications simultaneously:**
```bash
npm run dev:all
```

### Building for Production

#### Build all packages:
```bash
npm run build
```

#### Build individual packages:
```bash
npm run build:host     # Main shell application
npm run build:app1     # Counter micro-frontend  
npm run build:app2     # Todo micro-frontend
npm run build:app3     # Content Hub micro-frontend
npm run build:shared   # Shared component library
```

## Key Concepts Demonstrated

### 1. **Router-Based Shell Pattern**
- React Router v6 for client-side routing and navigation
- Protected routes with authentication requirements  
- Dedicated URLs for each micro-frontend
- Browser navigation support (back/forward buttons)
- Bookmarkable micro-frontend pages

### 2. **Authentication & Authorization**
- Centralized authentication system in shared-ui
- Role-based access control (admin vs user permissions)
- Persistent sessions with localStorage
- Protected wrapper components for route-level security
- Shared authentication context across all micro-frontends

### 3. **Component Composition with Protection**
- Micro-frontends export their main components
- Host application imports and renders them on dedicated routes
- Authentication and role-based protection at the component level
- Shared state isolation between micro-frontends
- Common design system through shared-ui

### 4. **Navigation System**
- Global navigation header with role-based link visibility
- Active route highlighting for current page
- Responsive navigation design
- Admin-only navigation items for restricted features
### 5. **Monorepo Structure**
- Uses npm workspaces to manage multiple packages
- Cross-package dependencies using file references
- Shared tooling and configuration
- Independent development workflows

### 6. **Technology Stack**
- **React 18** for UI components and composition
- **React Router v6** for client-side routing and navigation
- **JSONPlaceholder API** for external data integration demonstration
- **TypeScript** for type safety across all packages
- **Vite** for fast development and building with library mode support
- **npm workspaces** for monorepo management

## Architecture Benefits

### 🎯 **Single Point of Entry with Routing**
- Users access one URL with multiple routes (localhost:3000/*)
- Consistent navigation and branding across all pages
- Shared authentication/authorization with role-based access
- Unified error handling and loading states
- Bookmarkable URLs for direct micro-frontend access

### 🔐 **Centralized Authentication**
- Single login experience for all micro-frontends
- Persistent user sessions across browser refreshes
- Role-based access control (admin vs user permissions)
- Protected routes prevent unauthorized access
- Shared authentication context eliminates duplicate auth logic

### 🔄 **Independent Development**
- Teams can work on micro-frontends separately
- Independent testing and deployment cycles
- Isolated feature development
- Version control at component level

### 🧩 **Shared Design System**
- Consistent UI through shared-ui library
- Reusable components eliminate duplication
- Single source of truth for styling
- Easy global design updates

### ⚡ **Development Experience**
- Hot reload for instant feedback
- TypeScript for compile-time safety
- Vite for lightning-fast builds
- Workspace management for dependencies

## Extending the Project

### Adding a New Micro-Frontend

1. Create new directory: `packages/your-new-app/`
2. Set up package.json with shared dependencies
3. Export main component from `src/index.ts`
4. Import and add to host application layout
5. Configure unique development port

### Adding New Shared Components

1. Create component in `packages/shared-ui/src/`
2. Export from `packages/shared-ui/src/index.ts`
3. Rebuild: `npm run build:shared`
4. Import in any micro-frontend or host app

### Customizing the Layout and Navigation

Edit `packages/host/src/App.tsx` to:
- Add new navigation items and routes
- Modify the authentication flow
- Add global state management
- Integrate additional micro-frontends

Edit `packages/host/src/Navigation.tsx` to:
- Add new navigation links
- Modify role-based visibility rules
- Customize navigation styling
- Add dropdown menus or subnavigation

## Production Deployment

For production, you can:

1. **Deploy as Single Application**: Build and deploy the host application
   ```bash
   npm run build:host
   # Deploy the packages/host/dist/ folder
   ```

2. **Deploy Independently**: Each micro-frontend can still be deployed separately
   ```bash
   npm run build:app1
   npm run build:app2  
   # Deploy individual dist/ folders as needed
   ```

## Authentication & Routing Features

### 🔐 **Authentication System**

The application includes a complete authentication system with the following features:

#### **Login Flow**
- Users must authenticate before accessing any micro-frontend
- Persistent sessions using localStorage for demo purposes
- Automatic session restoration on page refresh
- Clean logout functionality with state cleanup
- User profile component displays current user info and logout button
- Navigation automatically updates based on authentication state

#### **Role-Based Access Control**
- **Admin Users**: Full access to all micro-frontends (Counter + Todo + Content Hub)
- **Regular Users**: Limited access (Counter + Content Hub, Todo restricted)
- Navigation automatically adjusts based on user role
- Protected wrapper components prevent unauthorized access
- User profile shows current role and permissions

#### **Authentication UI Components**
- **LoginForm**: Full-screen login interface with email/password fields
- **UserProfile**: Compact user info display with logout functionality
- **ProtectedWrapper**: Route-level authentication enforcement
- **Authentication Status**: Visual indicators throughout the application

#### **Demo Credentials**
```
Admin User:
Email: admin@example.com
Password: admin123

Regular User: 
Email: user@example.com
Password: user123
```

### 🧭 **React Router v6 Implementation**

The routing system provides a modern single-page application experience:

#### **Available Routes**
- **`/`** - Dashboard overview showing both micro-frontends
- **`/counter`** - Dedicated Counter app page (all authenticated users)
- **`/todo`** - Dedicated Todo app page (admin users only)

#### **Navigation Features**
- **Global Navigation Bar**: Consistent header navigation across all pages
- **Active Route Highlighting**: Current page is visually highlighted  
- **Role-Based Visibility**: Navigation links appear/disappear based on user permissions
- **User Profile Display**: Shows current user information with logout functionality
- **Authentication Status**: Visual indicators showing logged-in state
- **Responsive Design**: Navigation adapts to different screen sizes
- **Admin Badges**: Special visual indicators for admin-only features

#### **Protected Routing**
- All routes require authentication (redirect to login if not authenticated)
- Admin-only routes automatically restrict access for regular users
- Browser navigation (back/forward) works seamlessly
- Direct URL access is supported (bookmarkable links)

#### **Route Components**
- **DashboardPage**: Overview page showing both micro-frontends side-by-side
- **CounterPage**: Dedicated page for the Counter micro-frontend
- **TodoPage**: Dedicated page for the Todo micro-frontend (admin only)
- **ContentHubPage**: Wrapper for the Content Hub micro-frontend with nested routing

### 📰 **Content Hub Advanced Features**

The third micro-frontend (App3) demonstrates advanced patterns with external API integration:

#### **API Integration with JSONPlaceholder**
- **Posts Endpoint**: `GET /posts` - Fetches and displays blog posts in responsive cards
- **Users Endpoint**: `GET /users` - Retrieves user profiles with rich contact information  
- **Error Handling**: Comprehensive error states with retry functionality
- **Loading States**: Smooth loading indicators during API calls
- **Response Caching**: Efficient data fetching patterns

#### **Nested Routing Structure**
- **Posts Route** (`/content/`): Main page displaying latest blog posts
- **Users Route** (`/content/users`): Directory of user profiles with detailed cards
- **About Route** (`/content/about`): Architecture documentation and feature explanation
- **Internal Navigation**: Custom navigation component for seamless sub-route switching

#### **Advanced UI Components**
- **Responsive Grid Layouts**: Auto-adjusting card grids for different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Rich Typography**: Proper heading hierarchy and readable content structure
- **Loading Skeletons**: Professional loading states during data fetching
- **Error Boundaries**: Graceful error handling with user-friendly messages

## Demonstrated Patterns & Architecture

This monorepo showcases production-ready micro-frontend patterns:

### 🎯 **Three-Tier Micro-Frontend Architecture**
1. **Simple State Management** (App1 - Counter): Basic component state with shared UI
2. **Persistent Data Management** (App2 - Todo): localStorage integration with role-based access
3. **External API Integration** (App3 - Content Hub): REST API consumption with nested routing

### 🔧 **Advanced Implementation Patterns**
- **Nested Routing**: Micro-frontend with its own internal React Router setup
- **API Integration**: External REST API consumption with TypeScript interfaces
- **Error Boundaries**: Comprehensive error handling and loading states
- **Role-Based Access Control**: Different permission levels across micro-frontends
- **Component Composition**: Shared UI library with consistent design system
- **Build Optimization**: Library mode builds with proper module exports
- **Development Workflow**: Hot module replacement and independent development servers

### 📊 **Real-World Features Demonstrated**
- **Authentication Flow**: Login/logout with persistent sessions
- **Data Fetching**: Async API calls with proper state management
- **Responsive Design**: Mobile-first layouts with flexible grid systems
- **Navigation Systems**: Both global (host) and local (micro-frontend) navigation
- **Type Safety**: Full TypeScript coverage across all packages
- **Build Pipeline**: Optimized builds with type definitions and bundling

## Advanced Patterns

This basic setup can be extended with:

- **Module Federation** for runtime loading of micro-frontends
- **Single-SPA** for more advanced orchestration  
- **Advanced State Management** (Redux, Zustand) across micro-frontends
- **Deep Linking** with React Router for complex nested routes
- **SSO Integration** replacing localStorage with OAuth/SAML
- **API Gateway Integration** for centralized backend communication
- **GraphQL Federation** for distributed data schemas
- **Nx** for advanced monorepo tooling and caching
- **Micro-Frontend Testing** with isolated test environments
- **Progressive Web App** features for offline capability
- **Server-Side Rendering** (SSR) with Next.js integration
- **Container Orchestration** for independent deployments