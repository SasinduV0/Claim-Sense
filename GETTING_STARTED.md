# Claim-Sense - Quick Start Guide

## 🎉 Congratulations!

Your Nx monorepo with Expo is successfully set up and ready for development!

## 📱 Running the App

### Option 1: Using Nx
```bash
npx nx serve mobile
```

### Option 2: Using Expo directly
```bash
cd apps/mobile
npx expo start
```

### Option 3: Specific platforms
```bash
# iOS Simulator
npx nx run mobile:run-ios

# Android Emulator
npx nx run mobile:run-android

# Web
npx nx run mobile:serve
```

## 🧪 Testing Your Setup

1. **Start the development server**:
   ```bash
   npx nx serve mobile
   ```

2. **Scan the QR code** with:
   - **iOS**: Camera app or Expo Go app
   - **Android**: Expo Go app
   - **Or press** `i` for iOS simulator, `a` for Android emulator

3. You should see the Claim-Sense welcome screen!

## 📦 Adding New Features

### Create a new library
```bash
# Feature library
npx nx g @nx/expo:library feature-claims --directory=libs/mobile/features/claims

# Shared component
npx nx g @nx/expo:component ClaimCard --project=ui
```

### Create a new component in the mobile app
```bash
npx nx g @nx/expo:component HomeScreen --project=mobile --directory=screens
```

## 🔍 Viewing the Dependency Graph

```bash
npx nx graph
```

This will open an interactive graph showing how all your projects are connected!

## 🚀 Next Steps

1. **Set up navigation**: Install and configure React Navigation
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack
   npm install react-native-screens react-native-safe-area-context
   ```

2. **Add state management**: Redux, Zustand, or React Query
   ```bash
   npm install @tanstack/react-query
   ```

3. **Set up API integration**: Create API clients in `libs/shared/data-access`

4. **Design system**: Build reusable components in `libs/shared/ui`

5. **Authentication**: Implement user authentication flow

## 📚 Useful Nx Commands

```bash
# List all projects
npx nx show projects

# Show project details
npx nx show project mobile

# Run tests
npx nx test mobile

# Run tests for all affected projects
npx nx affected:test

# Lint all projects
npx nx run-many --target=lint --all

# Format code
npx nx format:write

# Clear cache
npx nx reset
```

## 🛠️ Project Structure Best Practices

```
libs/
├── mobile/
│   ├── features/         # Feature modules (auth, claims, profile)
│   │   ├── auth/
│   │   ├── claims/
│   │   └── profile/
│   ├── ui/               # Mobile-specific UI components
│   └── utils/            # Mobile-specific utilities
└── shared/
    ├── ui/               # Shared UI components
    ├── data-access/      # API clients, state
    ├── utils/            # Common utilities
    └── types/            # TypeScript types
```

## 🎨 Recommended Libraries

- **Navigation**: `@react-navigation/native`
- **Forms**: `react-hook-form`
- **API**: `@tanstack/react-query` or `axios`
- **State**: `zustand` or `@reduxjs/toolkit`
- **UI Components**: `react-native-paper` or `@rneui/themed`
- **Icons**: `@expo/vector-icons`
- **Camera**: `expo-camera`
- **Image Picker**: `expo-image-picker`

## 📱 Mobile Development Tips

1. **Use Expo Go** for rapid development
2. **Use EAS Build** for production builds
3. **Test on real devices** regularly
4. **Follow React Native best practices**
5. **Keep shared code in libraries**
6. **Use TypeScript** for type safety

## 🐛 Troubleshooting

### Metro bundler issues
```bash
npx nx reset
rm -rf node_modules
npm install
npx nx serve mobile
```

### iOS simulator not starting
```bash
npx nx run mobile:run-ios --simulator="iPhone 15 Pro"
```

### Android emulator not found
```bash
# List available devices
emulator -list-avds

# Start specific emulator
emulator -avd Pixel_7_API_34
```

## 💡 Pro Tips

1. **Use affected commands** in CI/CD to speed up builds
2. **Enable Nx Cloud** for distributed caching
3. **Create custom generators** for common patterns
4. **Use workspace generators** for consistency
5. **Document your architecture decisions**

---

**Happy Building! 🚀**

Need help? Check:
- [Nx Documentation](https://nx.dev)
- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
