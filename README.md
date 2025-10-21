# Claim-Sense

An insurance claims management mobile application built with React Native, Expo, and Nx monorepo architecture.

## 🏗️ Architecture

This project uses **Nx** - a powerful monorepo build framework that enables:
- ⚡ Smart caching and incremental builds
- 📦 Code sharing across multiple applications
- 🎯 Dependency graph visualization
- 🚀 Optimized CI/CD workflows

## 📁 Project Structure

```
Claim-Sense/
├── apps/
│   ├── mobile/              # Main Expo mobile application
│   └── mobile-e2e/          # End-to-end tests with Cypress
├── libs/
│   └── shared/
│       ├── ui/              # Shared UI components
│       ├── data-access/     # API clients and data management
│       ├── utils/           # Utility functions
│       └── types/           # TypeScript type definitions
├── tools/                   # Custom build scripts and tools
├── nx.json                  # Nx configuration
├── package.json             # Dependencies
└── tsconfig.base.json       # Base TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

```bash
# Install dependencies (already done)
npm install

# Start the development server
npx nx serve mobile
```

### Development Commands

```bash
# Serve the mobile app
npx nx serve mobile

# Build the mobile app
npx nx build mobile

# Run tests
npx nx test mobile

# View dependency graph
npx nx graph
```

## 📱 Mobile App Features

The Claim-Sense mobile app will include:
- �� Claim submission and tracking
- 📸 Photo upload for damage documentation
- 📊 Claim status dashboard
- 🔔 Push notifications
- 👤 User profile management

## 🧩 Shared Libraries

### @claim-sense-mobile/ui
Reusable UI components

### @claim-sense-mobile/data-access
API clients and data management

### @claim-sense-mobile/utils
Common utility functions

### @claim-sense-mobile/types
Shared TypeScript types

## 🎯 Nx Benefits

### Affected Commands
```bash
npx nx affected:test
npx nx affected:build
```

### Computation Caching
```bash
npx nx build mobile   # Cached after first run
```

### Dependency Graph
```bash
npx nx graph
```

## 📄 License

MIT
