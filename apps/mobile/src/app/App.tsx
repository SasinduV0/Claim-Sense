import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ui } from '@claim-sense-mobile/ui';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Claim-Sense</Text>
            <Text style={styles.subtitle}>
              Insurance Claims Management System
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Welcome! 👋</Text>
            <Text style={styles.description}>
              Your Nx monorepo with Expo is ready to go. This app is built with:
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.featureCard}>
              <Text style={styles.featureEmoji}>📱</Text>
              <Text style={styles.featureTitle}>React Native + Expo</Text>
              <Text style={styles.featureDescription}>
                Cross-platform mobile development
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureEmoji}>⚡</Text>
              <Text style={styles.featureTitle}>Nx Monorepo</Text>
              <Text style={styles.featureDescription}>
                Smart caching and dependency management
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureEmoji}>📦</Text>
              <Text style={styles.featureTitle}>Shared Libraries</Text>
              <Text style={styles.featureDescription}>
                Reusable UI, utils, types, and data-access
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shared Component Example</Text>
            <Ui />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Start building your insurance claims management app! 🚀
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default App;
