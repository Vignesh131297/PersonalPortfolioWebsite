# Portfolio Website - Replit Configuration

## Overview

This is a modern, responsive portfolio website built for Vignesh Arumugam, a Front End Developer. The application showcases a complete full-stack web development setup with a React frontend, Express backend, and PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom portfolio color scheme
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Middleware**: JSON parsing, URL encoding, request logging
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with tsx and Vite integration

### Database Architecture
- **Database**: PostgreSQL 16
- **ORM**: Drizzle ORM with type-safe queries
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless connection
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with typewriter effect
2. **About Section**: Personal introduction and background
3. **Skills Section**: Technical skills with progress indicators
4. **Experience Section**: Work history with timeline visualization
5. **Projects Section**: Featured projects showcase
6. **Education Section**: Academic background and certifications
7. **Contact Section**: Contact form and social links

### UI Components
- **Navigation**: Fixed floating navigation with smooth scrolling
- **Particle Background**: Animated particle system for visual appeal
- **Glass Effects**: Modern glassmorphism design elements
- **Responsive Design**: Mobile-first responsive layout
- **Interactive Elements**: Hover effects and animations

### Backend Features
- **Storage Layer**: Abstract interface for data operations
- **User Management**: Basic user schema with authentication support
- **Request Logging**: Detailed API request logging
- **Static File Serving**: Vite-powered static file serving in development

## Data Flow

### Frontend Data Flow
1. React components fetch data using TanStack Query
2. API requests go through the query client with error handling
3. UI updates reactively based on query state
4. Form submissions use mutation hooks for optimistic updates

### Backend Data Flow
1. Express routes handle incoming API requests
2. Requests are logged with timing and response data
3. Storage interface abstracts database operations
4. Responses are formatted as JSON with proper error handling

### Development Flow
1. Vite serves the React application in development
2. Express server runs with hot reload via tsx
3. Both frontend and backend are served from the same port
4. Database migrations are managed through Drizzle Kit

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives, Shadcn/ui components
- **Styling**: Tailwind CSS, Class Variance Authority, CLSX
- **Animations**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form, Hookform Resolvers
- **Icons**: Font Awesome, Lucide React
- **Utilities**: Date-fns, Nanoid

### Backend Dependencies
- **Server**: Express.js, HTTP server
- **Database**: Drizzle ORM, Neon Database connector
- **Session**: Connect-pg-simple for PostgreSQL sessions
- **Development**: TSX for TypeScript execution
- **Build**: ESBuild for production bundling

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Linting**: ESLint integration
- **PostCSS**: Tailwind CSS processing
- **Replit Integration**: Cartographer and error overlay plugins

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Served from the build output directory
4. **Environment**: Production environment variables are loaded

### Development Environment
- **Hot Reload**: Both frontend and backend support hot reload
- **Port Configuration**: Application runs on port 5000
- **Database**: PostgreSQL 16 with Drizzle migrations
- **Replit Integration**: Cartographer for enhanced debugging

### Hosting Configuration
- **Platform**: Replit autoscale deployment
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Database**: Neon Database serverless PostgreSQL
- **SSL**: Automatic HTTPS in production

## Changelog

Changelog:
- June 18, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.